import { ICharacterCard } from './types'
import {
  Container,
  Image
} from './styles'

const CharacterCard = ({ props }: ICharacterCard) => {
  const { thumbnail, name, description, key } = props

  const imageSize = 'portrait_medium';
  const imagePath = `${thumbnail.path}/${imageSize}.${thumbnail.extension}`
  return (
    <Container>
      {name}
      <Image src={imagePath} alt={key} />
    </Container>
  )
}

export default CharacterCard