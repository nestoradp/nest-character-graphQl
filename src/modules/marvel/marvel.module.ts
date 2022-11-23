import { Module } from '@nestjs/common';
import { MarvelCharacterService } from './service/marvel-character.service';
import { MarvelCharacterResolver } from './graphql/resolvers/marvel-character.resolver';
import { MARVEL_CHARACTER_REPOSITORY } from './symbol';
import { ApiMarvelCharacterRepository } from './repository/marvel/api-marvel-character.repository';
import { ClientModule } from '../../client/client.module';
import { FindAllCharacterMarvelAction } from './service/actions/findAll-character-marvel.action';
import { MarvelCharacterMapper } from './mappers/marvel-character.mapper';

@Module({
  providers: [
    MarvelCharacterService,
    MarvelCharacterResolver,
    FindAllCharacterMarvelAction,
    MarvelCharacterMapper,
    {
      provide: MARVEL_CHARACTER_REPOSITORY,
      useClass: ApiMarvelCharacterRepository,
    },
  ],
  imports: [ClientModule],
})
export class MarvelModule {}
