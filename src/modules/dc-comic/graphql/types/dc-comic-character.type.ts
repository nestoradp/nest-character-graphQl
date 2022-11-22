import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DcComicCharacterType {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  description: string;
  @Field()
  avatar: string;
  @Field(() => Float)
  average: number;
  @Field()
  CreateDate: Date;
  @Field()
  creator: string;
}
