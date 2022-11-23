import { MarvelCharacterRepository } from '../marvel-character.repository';
import { MarvelClientService } from '../../../../client/marvel/marvel-client.service';
import { Character } from '../../interface/marvel-character.interface';
import { Injectable } from '@nestjs/common';
import { CharacterDto } from '../../../../client/marvel/dto/character.dto';

@Injectable()
export class ApiMarvelCharacterRepository implements MarvelCharacterRepository {
  constructor(private readonly _marvelClientService: MarvelClientService) {}

  async getCharacter(): Promise<Character[]> {
    const character: CharacterDto[] =
      await await this._marvelClientService.getCharacter();
    return character;
  }
}
