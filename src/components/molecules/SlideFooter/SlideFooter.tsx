import styled from 'styled-components/macro'

import Container from 'components/organisms/Container'
import queries from 'styles/breakpoints'

export const Wrapper = styled(Container)`
  position: absolute;
  top: 64rem;
  padding: 0;
  width: calc(100% - 3rem);

  @media ${queries.tabletUp} {
    top: 75rem;
  }

  @media ${queries.laptopUp} {
    top: 64rem;
  }
  @media ${queries.desktopUp} {
    top: 46.875rem;
  }
`

export const Footer = styled.div`
  padding: 1.0625rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${queries.tabletUp} {
    padding: 1.5625rem 0;
  }
`

export const Controls = styled.div`
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

export const SlideInfo = styled.div`
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

export const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`
