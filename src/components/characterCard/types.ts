import { IThumbnail } from "../../pages/main/types"

export type IProps = {
  thumbnail: IThumbnail,
  name: string,
  description: string,
  key: string
}

export type ICharacterCard = {
  props: IProps
}