import faker from 'faker'
import { Location } from './CustomMap'
export class User implements Location{
    name : string
    location : { lat: number, lng: number }
    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    getData() {
        return this
    }
    markerContent(): string {
        return `User Name: ${this.name}`;
    }
}