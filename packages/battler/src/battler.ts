import { Pokemon } from "./pokemon";

export class Battler {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {
    console.log(pokemon1);
  }

  start() {
    console.log(this.pokemon1);
    console.log(
      `${this.pokemon1.name} and ${this.pokemon2.name} are battling!`
    );
  }
}
