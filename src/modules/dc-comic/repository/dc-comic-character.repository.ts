import { DcComicCharacterCreateInput } from '../graphql/input/dc-comic-character-create.input';
import { DcComicCharacterType } from '../graphql/types/dc-comic-character.type';
import { DcComicCharacterInterface } from '../interface/dc-comic-character.interface';

export interface DcComicCharacterRepository {
  create(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): Promise<DcComicCharacterInterface>;

  findAllCharacter(): Promise<DcComicCharacterInterface[]>;

  findCharacterById(id: number): Promise<DcComicCharacterInterface>;
}
