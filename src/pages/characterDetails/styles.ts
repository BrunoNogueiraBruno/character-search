import styled from 'styled-components'
import colors from '../../colors'

const { primaryBGColor, primaryTextColor } = colors

export const Container = styled.div`
  align-items: center;
  background: ${primaryBGColor};
  display: flex;
  justify-content: center;
  height: 92vh;
`

export const Content = styled.div`
  display: grid;
  color: ${primaryTextColor};
  grid-template-columns: 1fr 2fr;
  width: 80%;
`

export const MainInfo = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: fit-content;
`

export const Thumbnail = styled.img`
  height: 500px;
  border-radius: 4px;

  /* Fonte: https://polypane.app/css-3d-transform-examples/ */
  transform:
    rotate3d(.5,-.866,0,15deg)
    rotate(1deg);
  box-shadow:
    1em 1em 3em -2em rgba(0,0,0,.1),
    1em 1em 3.5em -2.5em rgba(0,0,0,1);
  transition:
    transform .4s ease,
    box-shadow .4s ease;
  filter: blur(.2px);
  
  &:hover { 
    transform:
      rotate3d(0,0,0,0deg)
      rotate(0deg);
    filter: blur(0);
  }
`

export const Name = styled.h1`
  color: ${primaryTextColor}
`

export const DescriptionContainer = styled.div`
  max-height: 80%;
  overflow-y: auto;
`

export const SerieContainer = styled.div``

export const SerieTitle = styled.h2`
  font-size: 1.1em;
`

export const SerieThumbnail = styled.img``