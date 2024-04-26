import { random } from "lodash";

export class account {
  private id: string;
  private mapSize: number;
  constructor(mapSize: number) {
    this.mapSize = mapSize;
    this.id = String(random(1, 99999));
  }
  getId() {
    return this.id;
  }
  getMapSize() {
    return this.mapSize;
  }
}
