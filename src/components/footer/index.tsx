import {
  Container,
} from "./styles"
import { IFooter } from "./types"

const Footer = ({ props }: IFooter) => {
  const { currPage, setCurrPage } = props

  return (
    <Container>
      <button
        onClick={() => setCurrPage(currPage - 1)}
      >
        -
      </button>
      <button
        onClick={() => setCurrPage(currPage + 1)}
      >
        +
      </button>
    </Container>
  )
}

export default Footer