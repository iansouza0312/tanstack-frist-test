import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/black/api/users')({
  server: {
    handlers: {
      GET: () => {
        return json({users: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']})
      },
    },
  },
})
