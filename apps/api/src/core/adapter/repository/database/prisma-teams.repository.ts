import { TeamsRepository } from '@/core/application/repository/teams.repository'
import { PrismaClient } from '@prisma/client'

export class PrismaTeamsRepository implements TeamsRepository {
  private prisma_client: PrismaClient

  constructor() {
    this.prisma_client = new PrismaClient()
  }

  async create(team: any): Promise<void> {
    await this.prisma_client.team.create({
      data: team
    })
  }

  async update(team: any): Promise<void> {
    await this.prisma_client.team.update({
      data: team,
      where: {
        id: team.id
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma_client.team.delete({
      where: {
        id
      }
    })
  }

  async find(filter: any): Promise<any[]> {
    const result = await this.prisma_client.team.findMany({
      where: filter
    })
    return result ?? []
  }

  async findById(id: string): Promise<any> {
    const result = await this.prisma_client.team.findUnique({
      where: {
        id
      }
    })
    return result ?? null
  }
}
