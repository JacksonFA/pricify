import { FastifyInstance } from 'fastify'
import { TeamsController } from '../adapter/controllers/teams.controller'

export const teamsRoutes = async (fastify: FastifyInstance) => {
  const teamsController = new TeamsController()
  fastify.post('/teams', teamsController.create)
  fastify.get('/teams', teamsController.find)
  fastify.get('/teams/:id', teamsController.findById)
  fastify.put('/teams/:id', teamsController.update)
  fastify.delete('/teams/:id', teamsController.delete)
}
