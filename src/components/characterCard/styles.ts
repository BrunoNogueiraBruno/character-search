import styled from 'styled-components'
import colors from '../../colors'
const { headerBGColor, primaryTextColor } = colors

export const Image = styled.img`
  height: 48px;
  object-fit: cover;
  width: 48px;
  margin-right: 24px;
`

export const MainInfo = styled.div`
  align-items: center;
  display: flex;
  font-weight: bold;
  width: 50%
`

export const Container = styled.div`
  align-items: center;
  background: ${headerBGColor};
  border-radius: 4px;
  color: ${primaryTextColor};
  box-shadow: 0px 0px 5px #00000033;
  display: flex;
  height: 48px;
  margin: 0 4px;
  padding: 20px 24px;

  :hover {
    box-shadow: 0px 0px 5px #606060;
  }
`

export const DescriptionContainer = styled.div`
  font-size: 14px;
  display: -webkit-box;

  // Fonte: https://stackoverflow.com/questions/33058004/applying-an-ellipsis-to-multiline-text
  max-width: 400px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  
`