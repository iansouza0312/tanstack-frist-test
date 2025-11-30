import { db } from '@/db'
import { users as usersTable } from '@/db/schema'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

export const getUsers = createServerFn({
  method: 'GET',
}).handler(async () => {
  const users = await db.select().from(usersTable)
  return {users}
})


export const Route = createFileRoute('/black/')({
  component: RouteComponent,
  loader: () => getUsers(),
})

function RouteComponent() {
  const {users} = Route.useLoaderData()

  return (
    <div className='text-white bg-zinc-950 min-h-screen p-8 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-medium mb-2'>Hello "/black/"!</h1>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
