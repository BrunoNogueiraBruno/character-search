import { useState } from "react"
import { useEffect } from "react"
import { getAllCharacters } from "../../api"
import ErrorMessage from "../../components/errorMessage"
import Header from "../../components/header"
import { ICharsList } from "../main/types"
import {
  Container,
  Content,
  MainInfo,
  Thumbnail,
  Name,
  DescriptionContainer,
  SerieContainer,
  SerieTitle,
  SerieThumbnail,
} from './styles'

const CharacterDetails = (props: { match: { params: { id: number } } }) => {
  const { id } = props.match.params
  const [data, setData] = useState<ICharsList>()
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  useEffect(() => {
    getAllCharacters()
      .then((result) => {
        const thisChar = result.find((char: ICharsList) => char.id === Number(id))
        setData(thisChar)
      })
      .catch((err) => {
        console.error(err)
        setShowErrorMessage(true)
      })
  }, [id])

  if (showErrorMessage) return <ErrorMessage />

  const imageSize = 'portrait_uncanny';
  const imagePath = `${data?.thumbnail.path}/${imageSize}.${data?.thumbnail.extension}`

  const getSeries = () => {
    if (data) {
      const { items } = data.series
      return items.map((item) => (
        <SerieContainer>
          <SerieTitle>{item.name}</SerieTitle>
          {/* <SerieThumbnail src={`${item.resourceURI}.jpg`} alt={`${item.name}-thumbnail`} /> */}
        </SerieContainer>
      ))
    }
  }

  return (
    <>
      <Header props={{ returnButton: true }} />
      <Container>
        <Content>
          <MainInfo>
            <Thumbnail src={imagePath} alt='aaa' />
            <Name>{data?.name}</Name>
          </MainInfo>

          <DescriptionContainer>
            {data?.description}
            {getSeries()}
          </DescriptionContainer>

        </Content>
      </Container>
    </>
  )
}

export default CharacterDetails
