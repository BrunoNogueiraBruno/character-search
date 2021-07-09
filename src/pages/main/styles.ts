import styled from 'styled-components'
import colors from '../../colors'

const { primaryBGColor, secondaryTextColor } = colors

export const Container = styled.div`
  background: ${primaryBGColor};
  display: flex;
  justify-content: center;
  width: 100vw;
`

export const Content = styled.div`
  display: grid;
  grid-row-gap: 9px;
  height: 84vh;
  overflow-y: auto;
  width: 80%;
`

export const TableHeader = styled.div`
  color: ${secondaryTextColor};
  display: flex;
  padding: 0 24px;

  span {
    width: 50%
  }
`