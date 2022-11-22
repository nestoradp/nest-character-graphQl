import { Injectable } from '@nestjs/common';
import { CreateDcComicCharacterAction } from './action/create-dc-comic-character.action';
import { DcComicCharacterType } from '../graphql/types/dc-comic-character.type';
import { DcComicCharacterInterface } from '../interface/dc-comic-character.interface';

@Injectable()
export class DcComicCharacterService {
  constructor(
    private readonly createDcComicCharacterAction: CreateDcComicCharacterAction,
  ) {}

  createDcComicCharacter(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): Promise<DcComicCharacterType> {
    return this.createDcComicCharacterAction.create(dcComicCharacterInterface);
  }
}
