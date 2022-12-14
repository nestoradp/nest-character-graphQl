import { Injectable } from '@nestjs/common';
import { MarvelBaseClient } from './marvel-base.client';
import { CharacterDto } from './dto/character.dto';
import { get } from 'lodash';

@Injectable()
export class MarvelClientService extends MarvelBaseClient {
  constructor() {
    super();
  }
  async getCharacter(): Promise<CharacterDto[]> {
    try {
      const url = `/characters?`;
      const response = await this.get(url);
      const data = get(await response.json(), 'data');
      const characterList: CharacterDto[] = get(data, 'results');
      return characterList;
    } catch (error) {
      throw new Error(`Server Error 500 API Marvel: ${JSON.stringify(error)}`);
    }
  }
}
