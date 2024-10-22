import { FastifyInstance } from 'fastify'
import { UsersController } from '../adapter/controllers/users.controller'

export const usersRoutes = async (fastify: FastifyInstance) => {
  const usersController = new UsersController()
  fastify.post('/users', usersController.create)
  fastify.get('/users', usersController.find)
  fastify.get('/users/:id', usersController.findById)
  fastify.put('/users/:id', usersController.update)
  fastify.delete('/users/:id', usersController.delete)
}
