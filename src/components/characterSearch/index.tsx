import {
  Container,
  Title,
  InputContainer,
  InputContent,
  InputSearch,
  SearchIcon
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
            <SearchIcon src='/icons/search.svg' alt='busca' />
          </InputContent>
        </label>
      </InputContainer>
    </Container>
  )
}

export default CharacterSearch