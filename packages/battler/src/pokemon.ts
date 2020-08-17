// oddish, togetic

export enum TypeKind {
  Normal = "normal",
  Fire = "fire",
  Fighting = "fighting",
  Water = "water",
  Flying = "flying",
  Grass = "grass",
  Poison = "poison",
  Electric = "electric",
  Ground = "ground",
  Psychic = "psychic",
  Rock = "rock",
  Ice = "ice",
  Bug = "bug",
  Dragon = "dragon",
  Ghost = "ghost",
  Dark = "dark",
  Steel = "steel",
  Fairy = "fairy",
}

export interface PokemonStats {
  hp: number;
  attack: number;
  spAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;
}
export interface Type {
  kind: TypeKind;
  weakness: Array<TypeKind>;
  strengths: Array<TypeKind>;
}

export interface DexPokemon {
  dexNumber: number;
  name: string;
  type1: TypeKind;
  type2?: TypeKind;
  baseStats: PokemonStats;
}

export interface Pokemon extends DexPokemon {
  moves: Array<PokemonMove>;
  stats: PokemonStats;
}

export interface Move {
  name: string;
  type: Type;
  pp: number;
  accuracy: number;
  power: number;
}

export interface PokemonMove extends Move {
  maxPP?: number;
  remainingPP: number;
}
