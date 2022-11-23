import { DcComicCharacterRepository } from '../dc-comic-character.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DcComicCharacterEntity } from '../entities/dc-comic-character.entity';
import { Repository } from 'typeorm';
import { DcComicCharacterInterface } from '../../interface/dc-comic-character.interface';
import { DcComicCharacterMappers } from '../../mappers/dc-comic-character.mappers';

@Injectable()
export class TypeormDcComicCharacterRepository
  implements DcComicCharacterRepository
{
  constructor(
    @InjectRepository(DcComicCharacterEntity)
    private readonly _dcComicCharacterEntityRepository: Repository<DcComicCharacterEntity>,
    private readonly _dcComicCharacterMapper: DcComicCharacterMappers,
  ) {}

  async create(
    dcComicCharacterInterface: DcComicCharacterInterface,
  ): Promise<DcComicCharacterInterface> {
    return await this._dcComicCharacterEntityRepository.save(
      this._dcComicCharacterMapper.convertToInterfaceFromEntity(
        dcComicCharacterInterface,
      ),
    );
  }

  findAllCharacter(): Promise<DcComicCharacterInterface[]> {
    return this._dcComicCharacterEntityRepository.find();
  }

  findCharacterById(id: number): Promise<DcComicCharacterInterface> {
    return this._dcComicCharacterEntityRepository.findOneBy({ id });
  }
}
