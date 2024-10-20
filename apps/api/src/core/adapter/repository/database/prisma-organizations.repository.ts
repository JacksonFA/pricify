import { OrganizationsRepository } from '@/core/application/repository/organizations.repository'
import { PrismaClient } from '@prisma/client'

export class PrismaOrganizationsRepository implements OrganizationsRepository {
  private prisma_client: PrismaClient

  constructor() {
    this.prisma_client = new PrismaClient()
  }
  async create(organization: any): Promise<void> {
    const organization_created = await this.prisma_client.organization.create({
      data: organization
    })
    console.log(organization_created)
  }
  async update(organization: any): Promise<void> {
    const organization_updated = await this.prisma_client.organization.update({
      data: organization
    })
    console.log(organization_updated)
  }
  async delete(id: string): Promise<void> {
    const organization_updated = await this.prisma_client.organization.delete()
  }
  async find(filter: any): Promise<any[]> {
    throw new Error('Method not implemented.')
  }
  async findById(id: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
