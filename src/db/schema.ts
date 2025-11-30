import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
})