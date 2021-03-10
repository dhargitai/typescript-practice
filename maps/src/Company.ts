import faker from "faker";
import { Locatable } from "./CustomMap";

export default class Company implements Locatable {
  name: string;
  slogan: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.slogan = faker.company.catchPhrase();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lon: Number.parseFloat(faker.address.longitude()),
    };
  }

  locationInfo() {
    return `Konichiwa, this is ${this.name}<br><br><i>${this.slogan}</i>`;
  }
}
