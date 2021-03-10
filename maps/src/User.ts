import Company from "./Company";
import { Locatable } from "./CustomMap";
import faker from "faker";

export default class User implements Locatable {
  firstName: string;
  lastName: string;
  company: Company;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lon: Number.parseFloat(faker.address.longitude()),
    };
  }

  locationInfo() {
    return `Yo, ma name is ${this.firstName}`;
  }
}
