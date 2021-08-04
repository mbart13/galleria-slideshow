import Logo from 'components/atoms/Logo'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import queries from 'styles/breakpoints'
import Container from 'components/organisms/Container'
import { motion } from 'framer-motion'

const StyledHeader = styled(Container)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-grey-9);

  @media ${queries.laptopUp} {
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
  transition: color 0.2s ease;
  margin-left: 1rem;

  &:hover {
    color: var(--color-black);
  }

  @media ${queries.tabletUp} {
    font-size: 0.75rem;
    letter-spacing: 0.160625rem;
  }
`

const Navigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${queries.laptopUp} {
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

const NavAnim = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 1,
    },
  },
}

const Header = (): JSX.Element => {
  return (
    <StyledHeader forwardedAs="header">
      <Navigation variants={NavAnim} initial="hide" animate="show">
        <Logo />
        <StyledLink to="/slideshow">Start Slideshow</StyledLink>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
