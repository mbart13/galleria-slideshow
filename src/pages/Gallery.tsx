import styled from 'styled-components/macro'
import queries from 'styles/breakpoints'
import Container from 'components/organisms/Container'
import data from 'data/data.json'
import Macy from 'macy'
import { useEffect } from 'react'
import GalleryCard from 'components/molecules/GalleryCard'
import { motion } from 'framer-motion'

export const container = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      ease: 'easeOut',
      delayChildren: 1.5,
    },
  },
}

const Wrapper = styled(Container)`
  padding-top: 1.5rem;

  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }
`

const List = styled(motion.ul)`
  margin: 0;

  img {
    width: 100%;
  }
`

const macyOptions = {
  container: '#macy-grid',
  trueOrder: true,
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1000: 4,
    650: {
      margin: 40,
      columns: 2,
    },
  },
}

const Gallery = (): JSX.Element => {
  useEffect(() => {
    new Macy(macyOptions)
  }, [])

  return (
    <Wrapper forwardedAs="main">
      <List id="macy-grid" variants={container} initial="hide" animate="show">
        {data.map((painting, index) => {
          return <GalleryCard {...painting} id={index} key={index} />
        })}
      </List>
    </Wrapper>
  )
}

export default Gallery
