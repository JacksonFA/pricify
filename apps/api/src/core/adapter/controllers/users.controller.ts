import { FastifyReply, FastifyRequest } from 'fastify'

export class UsersController {
  async create(request: FastifyRequest, reply: FastifyReply): Promise<string> {
    // TODO
    return reply.status(201).send({ message: 'Success' })
  }

  async find(request: FastifyRequest, reply: FastifyReply): Promise<string> {
    // TODO
    return reply.status(200).send({ message: 'Success' })
  }

  async findById(request: FastifyRequest, reply: FastifyReply): Promise<string> {
    // TODO
    return reply.status(200).send({ message: 'Success' })
  }

  async update(request: FastifyRequest, reply: FastifyReply): Promise<string> {
    // TODO
    return reply.status(200).send({ message: 'Success' })
  }

  async delete(request: FastifyRequest, reply: FastifyReply): Promise<string> {
    // TODO
    return reply.status(200).send({ message: 'Success' })
  }
}
