import { Inject, Injectable } from '@nestjs/common';
import { DC_COMIC_CHARACTER_REPOSITORY } from '../../symbols';
import { DcComicCharacterRepository } from '../../repository/dc-comic-character.repository';
import { DcComicCharacterInterface } from '../../interface/dc-comic-character.interface';

@Injectable()
export class CreateDcComicCharacterAction {
  constructor(
    @Inject(DC_COMIC_CHARACTER_REPOSITORY)
    private readonly _dcComicCharacterRepository: DcComicCharacterRepository,
  ) {}

  create(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): Promise<DcComicCharacterInterface> {
    return this._dcComicCharacterRepository.create(dcComicCharacterInterface);
  }
}
