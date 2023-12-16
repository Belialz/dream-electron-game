import { BaseEntity } from "./base.entity";
import { CityEntity } from "./city.entity";

export class CountryEntity extends BaseEntity {
        cities?: CityEntity[];
}