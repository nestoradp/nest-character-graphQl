import { MarvelCharacterRepository } from '../marvel-character.repository';
import { MarvelClientService } from '../../../../client/marvel/marvel-client.service';
import { Character } from '../../interface/marvel-character.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiMarvelCharacterRepository implements MarvelCharacterRepository {
  constructor(private readonly _marvelClientService: MarvelClientService) {}

  async getCharacter(): Promise<Character[]> {
    return this._marvelClientService.getCharacter();
  }
}
