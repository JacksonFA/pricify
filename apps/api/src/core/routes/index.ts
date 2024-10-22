import { FastifyInstance } from 'fastify'
import { organizationsRoutes } from './organizations.routes'

export const routes = async (fastify: FastifyInstance) => {
  fastify.register(organizationsRoutes)
}
