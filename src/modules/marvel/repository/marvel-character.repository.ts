import { Character } from '../interface/marvel-character.interface';

export interface MarvelCharacterRepository {
  getCharacter(): Promise<Character[]>;
}
