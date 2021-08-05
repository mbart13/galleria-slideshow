import styled from 'styled-components/macro'
import queries from 'styles/breakpoints'
import Slide from 'components/organisms/Slide'
import SlideFooter from 'components/molecules/SlideFooter'
import Container from 'components/organisms/Container'

const Wrapper = styled(Container)`
  padding-top: 1.5rem;
  display: flex;
  /* overflow: hidden; */
  /* display: grid;
  grid-template-columns: 100%; */
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
    <>
      <Wrapper forwardedAs="main">
        <Slide />
        <SlideFooter />
      </Wrapper>
    </>
  )
}

export default Slideshow
