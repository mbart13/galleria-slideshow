import styled from 'styled-components'
import { Painting } from 'models/painting'
import { useState } from 'react'
import { motion } from 'framer-motion'
type CaptionProps = {
  loaded: boolean
}

const Figure = styled.figure`
  position: relative;
  opacity: 1;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Caption = styled.figcaption<CaptionProps>`
  color: var(--color-white);
  position: absolute;
  bottom: 0;
  padding: 2rem;
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  width: 100%;
  transition: opacity 1.5s 2s ease;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};

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

export const CardAnim = {
  hide: {
    opacity: 0,
    y: '100%',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 1,
    },
  },
}

const GalleryCard: React.FC<Painting> = ({
  name,
  images,
  artist,
}): JSX.Element => {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.li variants={CardAnim} initial="hide" animate="show">
      <Figure>
        <a href="/">
          <img src={images.thumbnail} alt="" onLoad={() => setLoaded(true)} />
          <Caption loaded={loaded}>
            <h2>{name}</h2>
            <p>{artist.name}</p>
          </Caption>
        </a>
      </Figure>
    </motion.li>
  )
}

export default GalleryCard
