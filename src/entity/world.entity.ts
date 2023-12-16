import { BaseEntity } from "./base.entity";
import { ContinentEntity } from "./continent.entity";

export class WorldEntity extends BaseEntity {
    continents?: ContinentEntity[];
}