import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CharacterUrlType {
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  url?: string;
}
