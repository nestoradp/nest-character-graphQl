import { Field, ObjectType } from '@nestjs/graphql';
import { CharacterUrlType } from './character-url.type';
import { CharacterComicType } from './character-comic.type';

@ObjectType()
export class MarvelCharacterType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  modified: string;
  @Field()
  resourceURI: string;
  @Field(() => [CharacterUrlType], { nullable: true })
  urls?: CharacterUrlType[];
  @Field(() => CharacterComicType)
  comics: CharacterComicType;
}
