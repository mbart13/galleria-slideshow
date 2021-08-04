import styled from 'styled-components/macro'
import queries from 'styles/breakpoints'
import data from 'data/data.json'
import Slide from 'components/organisms/Slide'
import SlideFooter from 'components/molecules/SlideFooter'
import Container from 'components/organisms/Container'

const Wrapper = styled(Container)`
  padding-top: 1.5rem;
  display: flex;
  overflow: hidden;

  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }

  @media ${queries.desktopUp} {
    padding-top: 4rem;
  }
`
const painting = data[0]
const Slideshow = (): JSX.Element => {
  return (
    <>
      {/* <Wrapper forwardedAs="main">
        {data.map((painting, index) => (
          <Slide {...painting} key={index} id={index} />
        ))}
      </Wrapper> */}
      <Wrapper forwardedAs="main">
        <Slide />
      </Wrapper>
      <SlideFooter />
    </>
  )
}

export default Slideshow
