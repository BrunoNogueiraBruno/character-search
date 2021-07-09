import styled from 'styled-components'
import colors from '../../colors'

const { primaryTextColor, secondaryTextColor } = colors

export const Container = styled.div`
  color: ${primaryTextColor};
  margin-bottom: 45px;
`

export const Title = styled.h1.attrs({
  children: 'Busca de personagens'
})`
  margin-bottom: 16px
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 295px;

  span {
    font-weight: bold;
  }
`

export const InputContent = styled.div`
  margin-top: 8px;
  display: flex;
`

const inputSearchHorPadding = 16

export const InputSearch = styled.input`
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 295px;
  padding: 0 ${inputSearchHorPadding}px;

  &:focus {
    outline: none
  }

  ::placeholder {
    color: ${secondaryTextColor};
    font-size: 14px;
    font-style: italic;
  }
`

const seachIconWidth = 24

export const SearchIcon = styled.img`
  position: relative;
  cursor: text;
  width: ${`${seachIconWidth}px`};
  left: ${`-${seachIconWidth + (inputSearchHorPadding / 2)}px`};
`