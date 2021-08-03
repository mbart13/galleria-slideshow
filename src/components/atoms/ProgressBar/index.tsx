import styled, { keyframes, css } from 'styled-components'

type ProgressBarProps = {
  width: number
}

const animateProgress = (width: number) => keyframes`
  0% {
    width: 0;
  }

  100% {
    width: ${width}%;
  }
`

const Wrapper = styled.div<ProgressBarProps>`
  position: relative;
  background-color: var(--color-grey-9);
  width: 100%;
  height: 0.0625rem;

  &::after {
    content: '';
    position: absolute;
    background-color: var(--color-black);
    height: 100%;
    width: ${props => `${props.width}%`};
    animation: ${props =>
      css`
        ${animateProgress(props.width)} 1s linear
      `};
  }
`

const ProgressBar: React.FC<ProgressBarProps> = ({ width }): JSX.Element => {
  return <Wrapper width={width}></Wrapper>
}

export default ProgressBar
