import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DcComicCharacterCreateInput {
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
