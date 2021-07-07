type IItem = {
  name: string,
  resourceURI: string
}

type IObject = {
  available: number,
  collectionURI: string,
  items: IItem[],
  returned: number
}

type IThumbnail = {
  extension: string,
  path: string
}

type IURL = {
  type: string,
  url: string
}

export type ICharsList = {
  comics: IObject,
  description: string,
  events: IObject,
  id: number,
  modified: string,
  name: string,
  resourceURI: string,
  series: IObject,
  stories: IObject,
  thumbnail: IThumbnail,
  urls: IURL[]
}