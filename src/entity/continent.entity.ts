import { BaseEntity } from './base.entity'
import { CountryEntity } from './country.entity'

export class ContinentEntity extends BaseEntity {
    countries?: CountryEntity[]
}
