import { useState, useEffect } from "react"
import { getAllCharacters } from "../../api"
import CharacterCard from "../../components/characterCard"
import CharacterSearch from "../../components/characterSearch"
import ErrorMessage from "../../components/errorMessage"
import Footer from "../../components/footer"
import Header from "../../components/header"
import {
  Container,
  Content,
  DisplayCharacters,
  TableHeader,
  CharsPerPageContainer
} from "./styles"
import { ICharsList } from "./types"

const Main = () => {
  const [currPage, setCurrPage] = useState(0)
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [charsPerPage, setCharsPerPage] = useState(10)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const numOfPages = data.length / charsPerPage

  useEffect(() => {
    getAllCharacters()
      .then((result) => {
        const list = result.filter((char: ICharsList) => char.name.includes(searchValue))
        setData(list)
      })
      .catch((err) => {
        console.error(err)
        setShowErrorMessage(true)
      })
  }, [searchValue])

  const offset = currPage * charsPerPage // Fonte: https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const currPageData = data
    .slice(offset, offset + charsPerPage)
    .map((char: ICharsList, index: number) =>
      <CharacterCard
        key={`character-index-${index}`}
        props={{
          thumbnail: char.thumbnail,
          name: char.name,
          description: char.description,
          key: `character-index-${index}`
        }}
      />
    )

  return (
    <>
      <Header />
      <Container>
        <Content>
          <CharacterSearch
            props={{ searchValue, setSearchValue }}
          />

          <TableHeader>
            <span>Personagem</span>
            <span>Descrição</span>
            <CharsPerPageContainer>
              <label>
                <select value={charsPerPage} onChange={(e) => setCharsPerPage(Number(e.target.value))}>
                  <option value={15}>15</option>
                  <option value={10}>10</option>
                  <option value={5}>5</option>
                </select>
              </label>
            </CharsPerPageContainer>
          </TableHeader>

          {
            showErrorMessage ? (<ErrorMessage />) : (
              <DisplayCharacters>
                {currPageData}
              </DisplayCharacters>
            )
          }

        </Content>
      </Container>
      <Footer
        props={{
          currPage,
          setCurrPage,
          numOfPages
        }}
      />
    </>
  )
}

export default Main