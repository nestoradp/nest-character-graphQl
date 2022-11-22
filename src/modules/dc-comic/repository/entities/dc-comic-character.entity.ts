import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'character' })
export class DcComicCharacterEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  avatar: string;
  @Column()
  average: number;
  @Column()
  CreateDate: Date;
  @Column()
  creator: string;
}
