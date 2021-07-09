import styled from 'styled-components'
import colors from '../../colors'

const { headerBGColor, secondaryBGColor, primaryTextColor } = colors

export const Container = styled.div`
  align-items: center;
  background: ${headerBGColor};
  color: ${primaryTextColor};
  display: flex;
  justify-content: center;
  height: 8vh;
  width: 100vw;
`

export const Button = styled.button``
