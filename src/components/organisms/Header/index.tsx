import Logo from 'components/atoms/Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import QUERIES from 'styles/breakpoints'
import Container from 'components/organisms/Container'

const StyledHeader = styled(Container)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-grey-9);

  @media ${QUERIES.laptopUp} {
    border-bottom: none;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-1);
  text-transform: uppercase;
  font-size: 0.5625rem;
  font-weight: bold;
  letter-spacing: 0.120625rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-black);
  }

  @media ${QUERIES.tabletUp} {
    font-size: 0.75rem;
    letter-spacing: 0.160625rem;
  }
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${QUERIES.laptopUp} {
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: -3rem;
      left: 0;
      margin-bottom: 1.5rem;
      background-color: var(--color-grey-9);
    }
  }
`

const Header = (): JSX.Element => {
  return (
    <StyledHeader forwardedAs="header">
      <Navigation>
        <Logo />
        <StyledLink to="/slideshow">Start Slideshow</StyledLink>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
