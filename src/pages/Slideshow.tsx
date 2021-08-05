import styled from 'styled-components/macro'
import queries from 'styles/breakpoints'
import Slide from 'components/organisms/Slide'
import SlideFooter from 'components/molecules/SlideFooter'
import { motion } from 'framer-motion'
import { pageAnimation } from 'utils/animations'

const Wrapper = styled(motion.main)`
  padding-top: 1.5rem;
  display: flex;
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);
  position: relative;

  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }

  @media ${queries.desktopUp} {
    padding-top: 4rem;
  }
`

const Slideshow = (): JSX.Element => {
  return (
    <Wrapper exit="exit" variants={pageAnimation} initial="hide" animate="show">
      <Slide />
      <SlideFooter />
    </Wrapper>
  )
}

export default Slideshow
