import styled from 'styled-components'
import Queries from 'styles/breakpoints'
import data from 'data/data.json'
import Slide from 'components/organisms/Slide'
import SlideFooter from 'components/molecules/SlideFooter'

const Wrapper = styled.main`
  padding-top: 1.5rem;
  overflow-x: hidden;
  display: flex;
  @media ${Queries.tabletUp} {
    padding-top: 2.5rem;
  }

  @media ${Queries.desktopUp} {
    padding-top: 6.25rem;
  }
`
const painting = data[0]
const Slideshow = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        {data.map((painting, index) => (
          <Slide {...painting} id={index} key={index} />
        ))}
      </Wrapper>
      <SlideFooter />
    </>
  )
}

export default Slideshow
