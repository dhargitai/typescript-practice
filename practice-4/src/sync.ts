import axios, { AxiosPromise, AxiosResponse } from "axios";

export interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  save(data: T): Promise<T> {
    if (typeof data.id === "number") {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }

  async fetch(id: number): Promise<T> {
    const response = await axios.get(`${this.rootUrl}/${id}`);
    return response.data;
  }
}
