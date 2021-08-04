import ProgressBar from 'components/atoms/ProgressBar'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'

import Container from 'components/organisms/Container'
import queries from 'styles/breakpoints'
import { ReactComponent as NextButton } from 'assets/shared/icon-next-button.svg'
import { ReactComponent as PrevButton } from 'assets/shared/icon-back-button.svg'
import { paginate } from 'store/slidesSlice'

const Footer = styled.div`
  padding: 1.0625rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${queries.tabletUp} {
    padding: 1.5625rem 0;
  }
`

const Controls = styled.div`
  & > * + * {
    margin-left: 1.4375rem;
  }

  svg {
    width: 1rem;

    @media ${queries.tabletUp} {
      width: 1.5625rem;
    }
  }
`

const SlideInfo = styled.div`
  h3 {
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom: 0.5625rem;

    @media ${queries.tabletUp} {
      font-size: 1.125rem;
    }
  }

  p {
    font-size: 0.625rem;
    color: rgba(0, 0, 0, 0.75);

    @media ${queries.tabletUp} {
      font-size: 0.8125rem;
    }
  }
`

const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const SlideFooter = (): JSX.Element => {
  const dispatch = useDispatch()
  return (
    <Container as="footer">
      <ProgressBar width={8} />
      <Footer>
        <SlideInfo>
          <h3>Starry Night</h3>
          <p>Vincent Van Gogh</p>
        </SlideInfo>
        <Controls>
          <ArrowButton
            aria-label="Previous Slide"
            onClick={() => dispatch(paginate(-1))}
          >
            <PrevButton />
          </ArrowButton>
          <ArrowButton
            aria-label="Next Slide"
            onClick={() => dispatch(paginate(1))}
          >
            <NextButton />
          </ArrowButton>
        </Controls>
      </Footer>
    </Container>
  )
}

export default SlideFooter
