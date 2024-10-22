import { UsersRepository } from '@/core/application/repository/users.repository'
import { PrismaClient } from '@prisma/client'

export class PrismaUsersRepository implements UsersRepository {
  private prisma_client: PrismaClient

  constructor() {
    this.prisma_client = new PrismaClient()
  }

  async create(user: any): Promise<void> {
    await this.prisma_client.user.create({
      data: user
    })
  }

  async update(user: any): Promise<void> {
    await this.prisma_client.user.update({
      data: user,
      where: {
        id: user.id
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma_client.user.delete({
      where: {
        id
      }
    })
  }

  async find(filter: any): Promise<any[]> {
    const result = await this.prisma_client.user.findMany({
      where: filter
    })
    return result ?? []
  }

  async findById(id: string): Promise<any> {
    const result = await this.prisma_client.user.findUnique({
      where: {
        id
      }
    })
    return result ?? null
  }
}
