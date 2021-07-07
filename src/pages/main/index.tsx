import { useEffect } from "react"
import { useState } from "react"
import { getAllCharacters } from "../../api"
import CharacterCard from "../../components/characterCard"
import Header from "../../components/header"
import { Container } from "./styles"
import { ICharsList } from "./types"

const Main = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getAllCharacters().then((result) => setList(result))
  }, [])

  return (
    <>
      <Header />
      <Container>
        {list?.map((char: ICharsList, index) => {
          return (
            <CharacterCard
              props={{
                thumbnail: char.thumbnail.path,
                name: char.name,
                description: char.description,
                key: `character-card-${index}`
              }} />
          )
        })}
      </Container>
    </>
  )
}

export default Main