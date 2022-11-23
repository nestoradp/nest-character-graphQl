import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ComicSummaryCharacterType {
  @Field()
  resourceURI: string;
  @Field()
  name: string;
}
