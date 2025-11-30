import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/black/')({
  component: RouteComponent,
  loader: async () => {
    const response = await fetch('http://localhost:3000/black/api/users')
    const data = await response.json()

    return data as {users: string[]}
  }
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
