import { Module } from '@nestjs/common';
import { DcComicCharacterService } from './service/dc-comic-character.service';
import { DcComicCharacterResolver } from './graphql/resolvers/dc-comic-character.resolver';
import { CreateDcComicCharacterAction } from './service/action/create-dc-comic-character.action';
import { DC_COMIC_CHARACTER_REPOSITORY } from './symbols';
import { TypeormDcComicCharacterRepository } from './repository/typeorm/typeorm-dc-comic-character.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DcComicCharacterEntity } from './repository/entities/dc-comic-character.entity';
import { DcComicCharacterMappers } from './mappers/dc-comic-character.mappers';
import { FindAllDcComicCharaterAction } from './service/action/findAll-dc-comic-charater.action';
import { FindOneByIdDcComicCharacterAction } from './service/action/findOneById-dc-comic-character.action';

@Module({
  imports: [TypeOrmModule.forFeature([DcComicCharacterEntity])],
  providers: [
    DcComicCharacterService,
    DcComicCharacterResolver,
    CreateDcComicCharacterAction,
    FindAllDcComicCharaterAction,
    FindOneByIdDcComicCharacterAction,
    DcComicCharacterMappers,
    {
      provide: DC_COMIC_CHARACTER_REPOSITORY,
      useClass: TypeormDcComicCharacterRepository,
    },
  ],
})
export class DcComicModule {}
