import { Injectable } from '@nestjs/common';
import { CreateDcComicCharacterAction } from './action/create-dc-comic-character.action';
import { DcComicCharacterInterface } from '../interface/dc-comic-character.interface';
import { DcComicCharacterType } from '../graphql/types/dc-comic-character.type';
import { FindAllDcComicCharaterAction } from './action/findAll-dc-comic-charater.action';
import { FindOneByIdDcComicCharacterAction } from './action/findOneById-dc-comic-character.action';

@Injectable()
export class DcComicCharacterService {
  constructor(
    private readonly _createDcComicCharacterAction: CreateDcComicCharacterAction,
    private readonly _findAllDcComicCharacterAction: FindAllDcComicCharaterAction,
    private readonly _findOneByIdDcComicCharacterAction: FindOneByIdDcComicCharacterAction,
  ) {}

  createDcComicCharacter(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): Promise<DcComicCharacterType> {
    return this._createDcComicCharacterAction.create(dcComicCharacterInterface);
  }

  getCharacterList(): Promise<DcComicCharacterType[]> {
    return this._findAllDcComicCharacterAction.getCharacterList();
  }

  getCharacterById(id: number): Promise<DcComicCharacterType> {
    return this._findOneByIdDcComicCharacterAction.getCharacterById(id);
  }
}
