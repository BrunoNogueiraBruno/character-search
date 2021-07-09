import styled from 'styled-components'
import colors from '../../colors'

const { primaryTextColor } = colors

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Text = styled.h2.attrs({
  children: 'Algo deu errado com a sua requisição'
})`
  color: ${primaryTextColor}
`

export const Image = styled.img`
  height: 330px;
`