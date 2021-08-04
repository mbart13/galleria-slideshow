import queries from 'styles/breakpoints'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ReactComponent as IconView } from 'assets/shared/icon-view-image.svg'
import { Painting } from 'models/painting'
import {
  getCurrentSlideIndex,
  getCurrentSlide,
  getDirection,
} from 'store/slidesSlice'
import {
  Article,
  ArtistImageDesktop,
  ArtistImage,
  Button,
  Body,
  Caption,
  Description,
  Figure,
  Header,
  Link,
} from './Slide.styles'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '200%' : '-200%',
      opacity: 0,
    }
  },
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? '200%' : '-200%',
      opacity: 0,
    }
  },
}

const Slide = (): JSX.Element => {
  const currentIndex = useSelector(getCurrentSlideIndex)
  const direction = useSelector(getDirection)
  const currentSlide = useSelector(getCurrentSlide)

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Article
        key={currentIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          opacity: { duration: 10 },
          x: { duration: 10 },
        }}
      >
        <Header>
          <Figure>
            <picture>
              <source
                media={queries.tabletUp}
                srcSet={currentSlide.images.hero.large}
              />
              <img src={currentSlide.images.hero.small} alt="" />
            </picture>
            <Caption>
              <h1>{currentSlide.name}</h1>
              <p>{currentSlide.artist.name}</p>
              <ArtistImage>
                <img src={currentSlide.artist.image} alt="" />
              </ArtistImage>
            </Caption>
            <ArtistImageDesktop>
              <img src={currentSlide.artist.image} alt="" />
            </ArtistImageDesktop>
            <Button>
              <IconView />
              <span>View image</span>
            </Button>
          </Figure>
        </Header>
        <Body year={currentSlide.year}>
          <Description>{currentSlide.description}</Description>
          <Link
            href={currentSlide.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to source
          </Link>
        </Body>
      </Article>
    </AnimatePresence>
  )
}

export default Slide
