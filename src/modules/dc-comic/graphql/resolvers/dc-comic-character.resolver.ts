import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DcComicCharacterType } from '../types/dc-comic-character.type';
import { DcComicCharacterService } from '../../service/dc-comic-character.service';
import { DcComicCharacterCreateInput } from '../input/dc-comic-character-create.input';
import { DcComicCharacterMappers } from '../../mappers/dc-comic-character.mappers';

@Resolver(() => DcComicCharacterType)
export class DcComicCharacterResolver {
  constructor(
    private readonly _dcComicCharacterService: DcComicCharacterService,
    private readonly _dcComicCharacterMapper: DcComicCharacterMappers,
  ) {}

  @Mutation(() => DcComicCharacterType)
  createDcComicCharacter(
    @Args('dcComicCharacterCreateInput')
    dcComicCharacterCreateInput: DcComicCharacterCreateInput,
  ) {
    return this._dcComicCharacterService.createDcComicCharacter(
      this._dcComicCharacterMapper.convertToInputTypeFromInterface(
        dcComicCharacterCreateInput,
      ),
    );
  }

  @Query(() => [DcComicCharacterType])
  getCharacterList() {
    return this._dcComicCharacterService.getCharacterList();
  }

  @Query(() => DcComicCharacterType)
  getCharacterById(@Args('id') id: number) {
    return this._dcComicCharacterService.getCharacterById(id);
  }
}
