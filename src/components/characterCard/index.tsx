import { ICharacterCard } from './types'
import {
  Container,
  Image
} from './styles'

const CharacterCard = ({ props }: ICharacterCard) => {
  const { thumbnail, name, description, key } = props
  console.log(thumbnail)
  return (
    <Container key={key}>
      <Image alt={key} />
    </Container>
  )
}

export default CharacterCard