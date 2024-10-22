import { FastifyInstance } from 'fastify'
import { ProfilesController } from '../adapter/controllers/profiles.controller'

export const profilesRoutes = async (fastify: FastifyInstance) => {
  const profilesController = new ProfilesController()
  fastify.post('/profiles', profilesController.create)
  fastify.get('/profiles', profilesController.find)
  fastify.get('/profiles/:id', profilesController.findById)
  fastify.put('/profiles/:id', profilesController.update)
  fastify.delete('/profiles/:id', profilesController.delete)
}
