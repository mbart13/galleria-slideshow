import styled from 'styled-components'
import { Link } from 'react-router-dom'
import QUERIES from 'styles/breakpoints'
import Container from 'components/organisms/Container'
import data from 'data/data.json'
import Macy from 'macy'
import { useEffect } from 'react'
import GalleryCard from 'components/molecules/GalleryCard'

const Wrapper = styled(Container)`
  padding-top: 1.5rem;

  @media ${QUERIES.tabletUp} {
    padding-top: 2.5rem;
  }
`

const List = styled.ul`
  margin: 0;

  img {
    width: 100%;
  }
`

const macyOptions = {
  container: '#masonry-grid',
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

const GalleryGrid = (): JSX.Element => {
  useEffect(() => {
    new Macy(macyOptions)
  }, [])

  return (
    <Wrapper forwardedAs="main">
      <List id="masonry-grid">
        {data.map(painting => {
          return <GalleryCard {...painting} key={painting.name} />
        })}
      </List>
    </Wrapper>
  )
}

export default GalleryGrid
