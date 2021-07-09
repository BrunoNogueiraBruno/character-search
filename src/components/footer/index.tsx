import {
  Button,
  ArrowButton,
  Container,
  Content,
  ArrowsContainer,
  IndexContainer
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
      <Button
        key={`button-${content}`}
        type='button'
        changeBG={(currPage + 1) === content
        }
        onClick={onClick}
      >
        {content}
      </Button >
    ))

  const arrowConstructor = (buttons: IButtonToConstruct[]) => (
    <ArrowsContainer>
      {
        buttons.map(({ onClick, content, whenHide, name }, index) => {
          const whenHideFixed = whenHide?.map((num) => Math.ceil(num))
          return (
            <ArrowButton
              key={`${name}-${index}`}
              type='button'
              onClick={onClick}
              hide={!!whenHideFixed?.includes(currPage) || numOfPages === 0}
            >
              {content}
            </ArrowButton>
          )
        })
      }
    </ArrowsContainer>
  )

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
    const left = arrowConstructor([
      {
        onClick: () => setCurrPage(0),
        content: <img src='/icons/chevron-double-left.svg' alt='seta dupla esquerda' />,
        whenHide: [0, 1],
        name: 'double-arrow-left'
      },
      {
        onClick: handlePreviousPage,
        content: <img src='/icons/chevron-left.svg' alt='seta esquerda' />,
        whenHide: [0],
        name: 'arrow-left'
      },
    ])
    const right = arrowConstructor([
      {
        onClick: handleNextPage,
        content: <img src='/icons/chevron-right.svg' alt='seta direita' />,
        whenHide: [lastPage],
        name: 'double-arrow-right'
      },
      {
        onClick: () => setCurrPage(lastPage),
        content: <img src='/icons/chevron-double-right.svg' alt='seta dupla direita' />,
        whenHide: [lastPage - 1, lastPage],
        name: 'arrow-right'
      },
    ])
    const index = (
      <IndexContainer>{buttonConstructor(getIndexButtons())}</IndexContainer>
    )

    return [left, index, right]
  }

  return (
    <Container>
      <Content>
        {renderButtons()}
      </Content>
    </Container>
  )
}

export default Footer