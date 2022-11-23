import { Inject, Injectable } from '@nestjs/common';
import { DC_COMIC_CHARACTER_REPOSITORY } from '../../symbols';
import { DcComicCharacterRepository } from '../../repository/dc-comic-character.repository';
import { DcComicCharacterInterface } from '../../interface/dc-comic-character.interface';

@Injectable()
export class FindAllDcComicCharaterAction {
  constructor(
    @Inject(DC_COMIC_CHARACTER_REPOSITORY)
    private readonly _dcComicCharacterRepository: DcComicCharacterRepository,
  ) {}
  getCharacterList(): Promise<DcComicCharacterInterface[]> {
    return this._dcComicCharacterRepository.findAllCharacter();
  }
}
