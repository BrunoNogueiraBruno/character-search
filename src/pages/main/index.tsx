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
          const key = `character-card-${index}`
          return (
            <CharacterCard
              key={key}
              props={{
                thumbnail: char.thumbnail,
                name: char.name,
                description: char.description,
                key: key
              }} />
          )
        })}
      </Container>
    </>
  )
}

export default Main