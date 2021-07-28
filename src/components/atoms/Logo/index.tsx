import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LogoIcon } from 'assets/shared/logo.svg'
import QUERIES from 'styles/breakpoints'

const StyledLink = styled(Link)`
  line-height: 1;
`

const Wrapper = styled.div`
  width: 7.0625rem;
  svg {
    width: 100%;
    height: auto;
  }

  @media ${QUERIES.laptopUp} {
    width: 10.625rem;
  }
`

const Logo = (): JSX.Element => {
  return (
    <StyledLink to="/">
      <Wrapper>
        <LogoIcon aria-hidden="true" />
      </Wrapper>
    </StyledLink>
  )
}

export default Logo
