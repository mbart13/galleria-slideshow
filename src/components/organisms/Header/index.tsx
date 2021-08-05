import { useCallback, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  isPlaying,
  paginate,
  toggleIsPlaying,
  currentSlideIndex,
} from 'store/slidesSlice'
import { Navigation, StyledHeader, SlideshowButton } from './Header.styles'
import Logo from 'components/atoms/Logo'
import { pageAnimation } from 'utils/animations'

const INTERVAL = 6000

const Header = (): JSX.Element => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isSlideshowPlaying = useSelector(isPlaying)
  const currentIndex = useSelector(currentSlideIndex)
  const id = useRef<number | undefined>()

  const clearInterval = () => {
    window.clearInterval(id.current)
  }

  const startInterval = useCallback(() => {
    id.current = window.setInterval(() => {
      dispatch(paginate(1))
    }, INTERVAL)
  }, [dispatch])

  const handleClick = () => {
    history.push('/slideshow')
    if (!isSlideshowPlaying) {
      startInterval()
    } else {
      clearInterval()
    }
    dispatch(toggleIsPlaying())
  }

  useEffect(() => {
    if (isSlideshowPlaying) {
      clearInterval()
      startInterval()
    }
  }, [currentIndex, isSlideshowPlaying, startInterval])

  return (
    <StyledHeader
      exit="exit"
      variants={pageAnimation}
      initial="hide"
      animate="show"
    >
      <Navigation>
        <Logo />
        <SlideshowButton onClick={handleClick}>
          {isSlideshowPlaying ? 'Stop Slideshow' : 'Start Slideshow'}
        </SlideshowButton>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
