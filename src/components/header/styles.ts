import styled from 'styled-components'
import colors from '../../colors'

const { headerBGColor, secondaryBGColor, primaryTextColor, buttonHighlightColor } = colors

export const Container = styled.div`
  align-items: center;
  background: ${headerBGColor};
  color: ${primaryTextColor};
  display: flex;
  justify-content: center;
  min-height: 8vh;
  width: 100vw;
`

export const Content = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
`

export const ReturnButton = styled.button.attrs({
  children: 'VOLTAR',
  type: 'button'
})`
  background: none;
  border: none;
  color: ${buttonHighlightColor};
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3em;
`

export const Title = styled.h1.attrs({
  children: 'Character Search'
})`
  font-size: 1em;
`

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  b {
    margin-right: 4px;
  }
`

export const ProfilePicture = styled.div.attrs({
  children: 'CB'
})`
  align-items: center;
  background: ${secondaryBGColor};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  height: 32px;
  margin-left: 16px;
  width: 32px;

  &:hover {
    background: ${primaryTextColor};
    color: ${headerBGColor};
    cursor: default;
  }
`
