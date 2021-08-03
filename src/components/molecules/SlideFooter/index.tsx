import ProgressBar from 'components/atoms/ProgressBar'
import styled from 'styled-components'
import Container from 'components/organisms/Container'
import Queries from 'styles/breakpoints'
import { ReactComponent as NextButton } from 'assets/shared/icon-next-button.svg'
import { ReactComponent as PrevButton } from 'assets/shared/icon-back-button.svg'

const Footer = styled.footer`
  padding: 1.0625rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Queries.tabletUp} {
    padding: 1.5625rem 2.5rem;
  }
`

const Controls = styled.div`
  display: flex;

  & > * + * {
    margin-left: 1.4375rem;
  }

  svg {
    width: 1rem;

    @media ${Queries.tabletUp} {
      width: 1.5625rem;
    }
  }
`

const SlideInfo = styled.div`
  h3 {
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom: 0.5625rem;

    @media ${Queries.tabletUp} {
      font-size: 1.125rem;
    }
  }

  p {
    font-size: 0.625rem;
    color: rgba(0, 0, 0, 0.75);

    @media ${Queries.tabletUp} {
      font-size: 0.8125rem;
    }
  }
`

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0;
`

const SlideFooter = (): JSX.Element => {
  return (
    <>
      <ProgressBar width={8} />
      <Footer>
        <SlideInfo>
          <h3>Starry Night</h3>
          <p>Vincent Van Gogh</p>
        </SlideInfo>
        <Controls>
          <ButtonIcon>
            <PrevButton />
          </ButtonIcon>
          <ButtonIcon>
            <NextButton />
          </ButtonIcon>
        </Controls>
      </Footer>
    </>
  )
}

export default SlideFooter
