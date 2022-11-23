import { Injectable } from '@nestjs/common';
import { Character } from '../interface/marvel-character.interface';
import { MarvelCharacterType } from '../graphql/type/marvel-character.type';

@Injectable()
export class MarvelCharacterMapper {
  convertFromList(character: Character): MarvelCharacterType {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      modified: character.modified,
      resourceURI: character.resourceURI,
      urls: character.urls,
      comics: character.comics,
    };
  }

  convertListFromTypeList(characterList: Character[]): MarvelCharacterType[] {
    if (characterList.length == 0) {
      return characterList;
    }
    const characterListType: MarvelCharacterType[] = [];
    characterList.forEach((character) =>
      characterListType.push(this.convertFromList(character)),
    );
    return characterListType;
  }
}
