import { ICharacterCard } from './types'
import {
  Container,
  MainInfo,
  Image,
  DescriptionContainer
} from './styles'

const CharacterCard = ({ props }: ICharacterCard) => {
  const { thumbnail, name, description, key } = props
  const screenSize = window.screen.width;

  const imageSize = 'portrait_small';
  const imagePath = `${thumbnail.path}/${imageSize}.${thumbnail.extension}`
  return (
    <Container>
      <MainInfo>
        <Image src={imagePath} alt={key} />
        {name}
      </MainInfo>
      {screenSize > 800 && (
        <DescriptionContainer>
          {description}
        </DescriptionContainer>
      )}
    </Container>
  )
}

export default CharacterCard