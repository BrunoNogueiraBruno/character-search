import {
  Container,
  Title,
  InputContainer,
  InputContent,
  InputSearch,
  ButtonSearch
} from './styles'
import { ICharacterSearch } from './types'

const CharacterSearch = ({ props }: ICharacterSearch) => {
  const { searchValue, setSearchValue } = props

  return (
    <Container>
      <Title />

      <InputContainer>
        <label>
          <span>Nome do personagem</span>
          <InputContent>
            <InputSearch
              placeholder="Buscar"
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <ButtonSearch
              type='button'
              onClick={() => alert('a')}
            >
              <img src='/icons/search.svg' alt='busca' />
            </ButtonSearch>
          </InputContent>
        </label>
      </InputContainer>
    </Container>
  )
}

export default CharacterSearch