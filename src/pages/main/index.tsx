import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate'
import { getAllCharacters } from "../../api"
import CharacterCard from "../../components/characterCard"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { Container } from "./styles"
import { ICharsList } from "./types"

const CHARS_PER_PAGE = 10

const Main = () => {
  const [currPage, setCurrPage] = useState(0)
  const [data, setData] = useState([])

  useEffect(() => {
    getAllCharacters().then((result) => setData(result))
  }, [])

  const offset = currPage * CHARS_PER_PAGE // Fonte: https://ihsavru.medium.com/react-paginate-implementing-pagination-in-react-f199625a5c8e
  const currPageData = data
    .slice(offset, offset + CHARS_PER_PAGE)
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
        {currPageData}
      </Container>
      <Footer
        props={{
          currPage,
          setCurrPage
        }}
      />
    </>
  )
}

export default Main