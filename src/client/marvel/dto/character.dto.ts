export interface CharacterDto {
  id: string;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls?: UrlsDto[];
  thumbnail?: ImageDto;
  comics: ComicListDto;
  stories?: StoryListDto;
  events?: EventListDto;
  series?: SeriesListDto;
}

export interface UrlsDto {
  type?: string;
  url?: string;
}

export interface ImageDto {
  path: string;
  extension: string;
}

export interface ComicListDto {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummaryDto[];
}

export interface ComicSummaryDto {
  resourceURI: string;
  name: string;
}

export interface StoryListDto {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummaryDto[];
}

export interface StorySummaryDto {
  resourceURI: string;
  name: string;
  type: string;
}
export interface EventListDto {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummaryDto[];
}

export interface EventSummaryDto {
  resourceURI: string;
  name: string;
}

export interface SeriesListDto {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummaryDto[];
}

export interface SeriesSummaryDto {
  resourceURI: string;
  name: string;
}
