import { Address } from './address'

export type Organization = {
  id?: string
  name: string
  document: string
  website?: string
  whatsapp?: string
  instagram?: string
  type: string
  service_provider: boolean
  addresses: Address[]
}
