import styled from 'styled-components/macro'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

import Container from 'components/organisms/Container'
import { currentSlide } from 'store/slidesSlice'
import { isOpen, closeLightBox } from 'store/lightboxSlice'
import { useCallback, useEffect, useRef } from 'react'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.85);
  left: 0;
  right: 0;
  z-index: 100;
  height: 100vh;
`

const ImageWrapper = styled.div`
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: -2.0625rem;
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-white);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.1875rem;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.25);
  }
`

const LightboxRoot = document.getElementById('lightbox') as HTMLElement

const LightBox = (): JSX.Element => {
  const current = useSelector(currentSlide)
  const isLightboxOpen = useSelector(isOpen)
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLHeadingElement>(null)

  const handleClose = useCallback(() => dispatch(closeLightBox()), [dispatch])

  const handleEsc = useCallback(
    event => {
      if (event.keyCode === 27) {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      handleClose()
    }
  }

  useEffect(() => {
    isLightboxOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'initial')
  }, [isLightboxOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleEsc])

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isLightboxOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.3 }}
          ref={modalRef}
          onClick={handleClickOutside}
        >
          <Container>
            <ImageWrapper>
              <img src={current.images.gallery} alt={current.name} />
              <CloseButton onClick={() => dispatch(closeLightBox())}>
                Close
              </CloseButton>
            </ImageWrapper>
          </Container>
        </Overlay>
      )}
    </AnimatePresence>,
    LightboxRoot
  )
}

export default LightBox
