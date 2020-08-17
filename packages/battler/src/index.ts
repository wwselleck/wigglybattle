const fs = require("fs").promises;
const path = require("path");

import { Battler } from "./battler";
import { DexPokemon, Move } from "./pokemon";

function mapDexPokemonToPokemon(dexPokemon: any) {
  return {
    ...dexPokemon,
    dexNumber: dexPokemon.dex_number,
  };
}

async function readDex(): Promise<Array<DexPokemon>> {
  const data = await fs.readFile(
    path.resolve(__dirname, "../data/pokedex.json"),
    "utf-8"
  );
  const json = JSON.parse(data);

  return json.map(mapDexPokemonToPokemon);
}

async function readMoves(): Promise<Array<Move>> {
  const data = await fs.readFile(
    path.resolve(__dirname, "../data/moves.json"),
    "utf-8"
  );
  const json = JSON.parse(data);

  return json;
}

async function readData() {
  const pokedex = await readDex();
  const moves = await readMoves();
  return { pokedex, moves };
}

async function run() {
  const { pokedex, moves } = await readData();

  const oddish = pokedex.find((p) => p.name === "Oddish") as DexPokemon;
  const togetic = pokedex.find((p) => p.name === "Togetic") as DexPokemon;

  const bubble = moves.find((m) => m.name === "Bubble") as Move;
  const gust = moves.find((m) => m.name === "Gust") as Move;

  const battler = new Battler(
    {
      ...oddish,
      moves: [
        {
          ...bubble,
          remainingPP: 10,
        },
      ],
      stats: {
        hp: 10,
        attack: 10,
        spAttack: 10,
        defense: 10,
        specialDefense: 10,
        speed: 10,
      },
    },
    {
      ...togetic,
      moves: [
        {
          ...gust,
          remainingPP: 10,
        },
      ],
      stats: {
        hp: 10,
        attack: 10,
        spAttack: 10,
        defense: 10,
        specialDefense: 10,
        speed: 10,
      },
    }
  );
  await battler.start();
}

run();

