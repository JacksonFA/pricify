import { FastifyInstance } from 'fastify'
import { OrganizationsController } from '../adapter/controllers/organizations.controller'

export const organizationsRoutes = async (fastify: FastifyInstance) => {
  const organizationsController = new OrganizationsController()
  fastify.post('/organizations', organizationsController.create)
  fastify.get('/organizations', organizationsController.find)
  fastify.get('/organizations/:id', organizationsController.findById)
  fastify.put('/organizations/:id', organizationsController.update)
  fastify.delete('/organizations/:id', organizationsController.delete)
}
