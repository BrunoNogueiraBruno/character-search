import styled from 'styled-components'
import colors from '../../colors'

const { primaryBGColor, secondaryTextColor } = colors

export const Container = styled.div`
  background: ${primaryBGColor};
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 100vw;
`

export const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 24px;
  height: 75vh;
  width: 80%;
`

export const DisplayCharacters = styled.div`
  display: grid;
  grid-row-gap: 9px;
  overflow-y: auto;
  height: 60%;
  padding-top: 4px;
  margin-top: 9px;
`

export const TableHeader = styled.div`
  color: ${secondaryTextColor};
  display: flex;
  padding: 0 24px;

  span {
    width: 50%
  }
`