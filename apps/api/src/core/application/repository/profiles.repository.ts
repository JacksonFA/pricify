export abstract class ProfilesRepository {
  abstract create(profile: any): Promise<void>
  abstract update(profile: any): Promise<void>
  abstract delete(id: string): Promise<void>
  abstract find(filter: any): Promise<any[]>
  abstract findById(id: string): Promise<any>
}
