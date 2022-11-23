import { Injectable } from '@nestjs/common';
import { FindAllCharacterMarvelAction } from './actions/findAll-character-marvel.action';
import { MarvelCharacterType } from '../graphql/type/marvel-character.type';
import { Character } from '../interface/marvel-character.interface';
import { MarvelCharacterMapper } from '../mappers/marvel-character.mapper';

@Injectable()
export class MarvelCharacterService {
  constructor(
    private readonly _findAllCharacterMarvelAction: FindAllCharacterMarvelAction,
    private readonly _marvelCharacterMapper: MarvelCharacterMapper,
  ) {}

  async getMarvelCharacterList(): Promise<MarvelCharacterType[]> {
    const characterList: Character[] =
      await this._findAllCharacterMarvelAction.getMarvelCharacterList();
    return this._marvelCharacterMapper.convertListFromTypeList(characterList);
  }
}
