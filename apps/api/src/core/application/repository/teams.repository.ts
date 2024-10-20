export abstract class TeamsRepository {
  abstract create(team: any): Promise<void>
  abstract update(team: any): Promise<void>
  abstract delete(id: string): Promise<void>
  abstract find(filter: any): Promise<any[]>
  abstract findById(id: string): Promise<any>
}
