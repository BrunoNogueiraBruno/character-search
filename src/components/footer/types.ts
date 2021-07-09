type IProps = {
  currPage: number,
  setCurrPage: (newPage: number) => void,
  numOfPages: number
}

export type IFooter = {
  props: IProps
}

export type IButtonToConstruct = {
  onClick: () => void,
  content: any,
  whenHide?: number[],
  name?: string
}
