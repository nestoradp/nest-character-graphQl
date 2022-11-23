import { Inject, Injectable } from '@nestjs/common';
import { MARVEL_CHARACTER_REPOSITORY } from '../../symbol';
import { MarvelCharacterRepository } from '../../repository/marvel-character.repository';
import { Character } from '../../interface/marvel-character.interface';

@Injectable()
export class FindAllCharacterMarvelAction {
  constructor(
    @Inject(MARVEL_CHARACTER_REPOSITORY)
    private readonly _apiMarvelCharacterRepository: MarvelCharacterRepository,
  ) {}

  getMarvelCharacterList(): Promise<Character[]> {
    return this._apiMarvelCharacterRepository.getCharacter();
  }
}
