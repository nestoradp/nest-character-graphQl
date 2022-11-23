import { Query, Resolver } from '@nestjs/graphql';
import { MarvelCharacterService } from '../../service/marvel-character.service';
import { MarvelCharacterType } from '../type/marvel-character.type';

@Resolver()
export class MarvelCharacterResolver {
  constructor(
    private readonly _marvelCharacterService: MarvelCharacterService,
  ) {}

  @Query(() => [MarvelCharacterType])
  async getCharacterMarvel() {
    const a: MarvelCharacterType[] =
      await this._marvelCharacterService.getMarvelCharacterList();

    console.log(`Resolver:${JSON.stringify(a)}`);
    return a;
  }
}
