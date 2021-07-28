import styled from 'styled-components'
import QUERIES from 'styles/breakpoints'
import { Painting } from 'models/painting'

const Figure = styled.figure`
  position: relative;
  opacity: 1;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Caption = styled.figcaption`
  color: var(--color-white);
  position: absolute;
  bottom: 0;
  padding: 2rem;
  text-align: left;
  padding-right: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 0.4375rem;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  p {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.75);
  }
`

const GalleryCard: React.FC<Painting> = ({
  name,
  images,
  artist,
}): JSX.Element => {
  return (
    <li>
      <Figure>
        <a href="/">
          <img src={images.thumbnail} alt="" />
          <Caption>
            <h2>{name}</h2>
            <p>{artist.name}</p>
          </Caption>
        </a>
      </Figure>
    </li>
  )
}

export default GalleryCard
