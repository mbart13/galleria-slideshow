import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Painting } from 'models/painting'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Figure = styled.figure`
  position: relative;
  opacity: 1;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const Caption = styled(motion.figcaption)`
  color: var(--color-white);
  position: absolute;
  bottom: 0;
  padding: 2rem;
  text-align: left;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: normal;
    margin-bottom: 0.4375rem;
    white-space: pre-line;
  }

  p {
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.75);
  }
`

export const CardAnim = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export const CaptionAnim = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 5.25,
      duration: 2,
    },
  },
}

const GalleryCard: React.FC<Painting> = ({
  id,
  name,
  images,
  artist,
}): JSX.Element => {
  return (
    <motion.li variants={CardAnim}>
      <Figure>
        <Link to="/slideshow" onClick={() => console.log('clicked')}>
          <img src={images.thumbnail} alt="" />
          <Caption variants={CaptionAnim}>
            <h2>{name}</h2>
            <p>{artist.name}</p>
          </Caption>
        </Link>
      </Figure>
    </motion.li>
  )
}

export default GalleryCard
