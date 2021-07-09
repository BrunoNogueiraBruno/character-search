import {
  Button,
  Container,
} from "./styles"
import { IButtonToConstruct, IFooter } from "./types"

const Footer = ({ props }: IFooter) => {
  const { currPage, setCurrPage, numOfPages } = props
  const lastPage = numOfPages - 1

  const handlePreviousPage = () => {
    if (currPage > 0) {
      setCurrPage(currPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currPage < lastPage) {
      setCurrPage(currPage + 1)
    }
  }

  const buttonConstructor = (buttons: IButtonToConstruct[]) =>
    buttons.map(({ onClick, content }) => (
      <Button type='button' onClick={onClick}>{content}</Button>
    ))

  const getIndexButtons = () => {
    let buttons = []
    for (let index = 0; index < numOfPages; index += 1) {
      const pageDisplayNumber = index + 1
      const indexButton = {
        onClick: () => setCurrPage(index),
        content: pageDisplayNumber
      }
      buttons.push(indexButton)
    }
    return buttons
  }

  const renderButtons = () => {
    const left = [
      { onClick: () => setCurrPage(0), content: <img src='/icons/chevron-double-left.svg' alt='seta dupla esquerda' /> },
      { onClick: handlePreviousPage, content: <img src='/icons/chevron-left.svg' alt='seta esquerda' /> },
    ]
    const right = [
      { onClick: handleNextPage, content: <img src='/icons/chevron-right.svg' alt='seta direita' /> },
      { onClick: () => setCurrPage(lastPage), content: <img src='/icons/chevron-double-right.svg' alt='seta dupla direita' /> },
    ]
    const index = getIndexButtons()

    const allButtons = [...left, ...index, ...right] as IButtonToConstruct[]
    return buttonConstructor(allButtons)
  }

  return (
    <Container>
      {renderButtons()}
    </Container>
  )
}

export default Footer