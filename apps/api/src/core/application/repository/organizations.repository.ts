export abstract class OrganizationsRepository {
  abstract create(organization: any): Promise<void>
  abstract update(organization: any): Promise<void>
  abstract delete(id: string): Promise<void>
  abstract find(filter: any): Promise<any[]>
  abstract findById(id: string): Promise<any>
}
