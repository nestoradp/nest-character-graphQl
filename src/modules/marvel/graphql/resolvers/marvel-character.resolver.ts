import { Query, Resolver } from '@nestjs/graphql';
import { MarvelCharacterService } from '../../service/marvel-character.service';
import { MarvelCharacterType } from '../type/marvel-character.type';

@Resolver()
export class MarvelCharacterResolver {
  constructor(
    private readonly _marvelCharacterService: MarvelCharacterService,
  ) {}

  @Query(() => [MarvelCharacterType])
  getCharacterMarvel() {
    return this._marvelCharacterService.getMarvelCharacterList();
  }
}
