import { ProfilesRepository } from '@/core/application/repository/profiles.repository'
import { PrismaClient } from '@prisma/client'

export class PrismaProfilesRepository implements ProfilesRepository {
  private prisma_client: PrismaClient

  constructor() {
    this.prisma_client = new PrismaClient()
  }

  async create(profile: any): Promise<void> {
    await this.prisma_client.profile.create({
      data: profile
    })
  }

  async update(profile: any): Promise<void> {
    await this.prisma_client.profile.update({
      data: profile,
      where: {
        id: profile.id
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma_client.profile.delete({
      where: {
        id
      }
    })
  }

  async find(filter: any): Promise<any[]> {
    const result = await this.prisma_client.profile.findMany({
      where: filter
    })
    return result ?? []
  }

  async findById(id: string): Promise<any> {
    const result = await this.prisma_client.profile.findUnique({
      where: {
        id
      }
    })
    return result ?? null
  }
}
