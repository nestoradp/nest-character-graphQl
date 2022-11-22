import { Injectable } from '@nestjs/common';
import { DcComicCharacterCreateInput } from '../graphql/input/dc-comic-character-create.input';
import { DcComicCharacterInterface } from '../interface/dc-comic-character.interface';
import { DcComicCharacterEntity } from '../repository/entities/dc-comic-character.entity';

@Injectable()
export class DcComicCharacterMappers {
  convertToInputTypeFromInterface(
    dcComicCharacterCreateInput: DcComicCharacterCreateInput,
  ): DcComicCharacterInterface {
    return {
      id: dcComicCharacterCreateInput.id,
      name: dcComicCharacterCreateInput.name,
      description: dcComicCharacterCreateInput?.description,
      avatar: dcComicCharacterCreateInput.avatar,
      average: dcComicCharacterCreateInput.average,
      CreateDate: dcComicCharacterCreateInput.CreateDate,
      creator: dcComicCharacterCreateInput.creator,
    };
  }

  convertToInterfaceFromEntity(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): DcComicCharacterEntity {
    return {
      id: dcComicCharacterInterface.id,
      name: dcComicCharacterInterface.name,
      description: dcComicCharacterInterface?.description,
      avatar: dcComicCharacterInterface.avatar,
      average: dcComicCharacterInterface.average,
      CreateDate: dcComicCharacterInterface.CreateDate,
      creator: dcComicCharacterInterface.creator,
    };
  }
}
