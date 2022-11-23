import { Field, ObjectType } from '@nestjs/graphql';
import { ComicSummaryCharacterType } from './comic-summary-character.type';

@ObjectType()
export class CharacterComicType {
  @Field()
  available: number;
  @Field()
  returned: number;
  @Field()
  collectionURI: string;
  @Field(() => [ComicSummaryCharacterType])
  items: ComicSummaryCharacterType[];
}
