import styled from 'styled-components'
import colors from '../../colors'

const {
  headerBGColor,
  secondaryBGColor,
  primaryTextColor,
  primaryBGColor,
  buttonHighlightColor
} = colors

export const Container = styled.div`
  align-items: center;
  background: ${headerBGColor};
  color: ${primaryTextColor};
  display: flex;
  justify-content: center;
  min-height: 10vh;
  width: 100vw;
`

export const Content = styled.div`
  justify-content: center;
  display: flex;
`

export const Button = styled.button<{ changeBG: boolean }>`
background: ${({ changeBG }) => changeBG ? `${buttonHighlightColor}` : `${secondaryBGColor}`};
  color: ${({ changeBG }) => changeBG ? `${headerBGColor}` : `${primaryTextColor}`};
  border: 1px solid ${primaryBGColor};
  border-radius: 4px;
  width: 40px;
  height: 32px;
  margin: 8px;
`

export const ArrowButton = styled.button<{ hide: boolean }>`
  background: none;
  border: none;
  visibility: ${({ hide }) => hide ? 'hidden' : 'auto'};
  width: fit-content;
`

export const ArrowsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const IndexContainer = styled.div`
  display: flex;
`
