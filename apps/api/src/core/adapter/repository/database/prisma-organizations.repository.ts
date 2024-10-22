import { OrganizationsRepository } from '@/core/application/repository/organizations.repository'
import { PrismaClient } from '@prisma/client'

export class PrismaOrganizationsRepository implements OrganizationsRepository {
  private prisma_client: PrismaClient

  constructor() {
    this.prisma_client = new PrismaClient()
  }

  async create(organization: any): Promise<void> {
    await this.prisma_client.organization.create({
      data: organization
    })
  }

  async update(organization: any): Promise<void> {
    await this.prisma_client.organization.update({
      data: organization,
      where: {
        id: organization.id
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma_client.organization.delete({
      where: {
        id
      }
    })
  }

  async find(filter: any): Promise<any[]> {
    const result = await this.prisma_client.organization.findMany({
      where: filter
    })
    return result ?? []
  }

  async findById(id: string): Promise<any> {
    const result = await this.prisma_client.organization.findUnique({
      where: {
        id
      }
    })
    return result ?? null
  }
}
