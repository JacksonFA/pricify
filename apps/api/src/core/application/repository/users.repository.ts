export abstract class UsersRepository {
  abstract create(user: any): Promise<void>
  abstract update(user: any): Promise<void>
  abstract delete(id: string): Promise<void>
  abstract find(filter: any): Promise<any[]>
  abstract findById(id: string): Promise<any>
}
