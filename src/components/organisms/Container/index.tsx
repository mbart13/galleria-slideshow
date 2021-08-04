import React from 'react'
import styled from 'styled-components/macro'

export interface BoxProps {
  className?: string
  as?: React.ElementType
  children?: React.ReactNode
}

export const Wrapper = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);
`

const Container: React.FC<BoxProps> = ({
  className,
  as,
  children,
}): JSX.Element => {
  return (
    <Wrapper className={className} as={as}>
      {children}
    </Wrapper>
  )
}

export default Container
