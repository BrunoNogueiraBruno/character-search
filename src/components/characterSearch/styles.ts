import styled from 'styled-components'
import colors from '../../colors'

const { primaryTextColor } = colors

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

export const InputSearch = styled.input`
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 295px;

  &:focus {
    outline: none
  }
`

export const ButtonSearch = styled.button`
  border: none;
  background: none;
`