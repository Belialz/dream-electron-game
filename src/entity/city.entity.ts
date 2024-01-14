import { BaseEntity } from './base.entity'
import { HumanEntity } from './human.entity'

export class CityEntity extends BaseEntity {
    people?: HumanEntity[]
}
