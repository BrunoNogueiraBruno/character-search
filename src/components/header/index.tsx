import { Link } from "react-router-dom"
import {
  Container,
  Content,
  ReturnButton,
  Title,
  UserInfoContainer,
  ProfilePicture
} from "./styles"

const Header = ({ props }: { props?: { returnButton: boolean } }) => {
  return (
    <Container>
      <Content>
        {
          props?.returnButton ? (
            <Link to='/'>
              <ReturnButton />
            </Link>
          ) : (
            <Title />
          )
        }

        <UserInfoContainer>
          <b>Nome do candidato</b>
          Teste de Front-end
          <ProfilePicture />
        </UserInfoContainer>
      </Content>
    </Container>
  )
}

export default Header