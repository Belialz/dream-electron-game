export class BaseEntity {
    name: string
    description: string
    image?: string
    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }
}
