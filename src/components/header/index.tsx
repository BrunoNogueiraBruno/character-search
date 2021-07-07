import {
  Container,
  Content,
  Title,
  UserInfoContainer,
  ProfilePicture
} from "./styles"

const Header = () => {
  return (
    <Container>
      <Content>
        <Title />
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