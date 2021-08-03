import styled from 'styled-components'
import Container from 'components/organisms/Container'
import Queries from 'styles/breakpoints'
import data from 'data/data.json'
import { useRef } from 'react'
import { ReactComponent as IconView } from 'assets/shared/icon-view-image.svg'
import { Painting } from 'models/painting'

const Article = styled.article`
  flex: 0 0 100%;
  transform: translateX(100%);

  @media ${Queries.desktopUp} {
    display: flex;
    align-items: flex-start;
  }
`

const Header = styled.div`
  @media ${Queries.tabletUp} {
    display: flex;
    margin-bottom: 9rem;
  }

  @media ${Queries.laptopUp} {
    flex-basis: 60%;
  }
`

const Figure = styled.figure`
  position: relative;
  margin-bottom: 11rem;

  @media ${Queries.tabletUp} {
    width: 29.6875rem;
    margin-bottom: 0;
  }
`

const Caption = styled.figcaption`
  position: absolute;
  background-color: var(--color-white);
  padding: 1.5rem;
  /* min-width: 17.5rem; */
  bottom: -3.5rem;
  width: 85%;

  @media ${Queries.tabletUp} {
    padding: 0 4rem 4.125rem 4rem;
    top: 0;
    left: 15rem;
    bottom: unset;
    width: 100%;
  }

  @media ${Queries.desktopUp} {
    left: 26rem;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--color-black);
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0.5rem;

    @media ${Queries.tabletUp} {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 0.9375rem;
    color: var(--color-grey-1);
  }
`

const ArtistImage = styled.div`
  position: absolute;
  bottom: -4rem;
  /* margin-bottom: 3.375rem; */

  @media ${Queries.tabletUp} {
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    right: 5rem;
  }

  @media ${Queries.desktopUp} {
    display: none;
  }

  img {
    width: 4rem;
    height: 4rem;

    @media ${Queries.tabletUp} {
      width: 8rem;
      height: 8rem;
    }
  }
`

const ArtistImageDesktop = styled.div`
  display: none;
  position: absolute;
  right: -10rem;
  transform: translateY(-50%);
  img {
    width: 8rem;
    height: 8rem;
  }

  @media ${Queries.desktopUp} {
    display: block;
  }
`

const Body = styled.div<DescriptionProps>`
  padding-bottom: 4.1875rem;
  position: relative;

  @media ${Queries.tabletUp} {
    padding-left: 7.1875rem;
    padding-right: 7.1875rem;
  }

  @media ${Queries.desktopUp} {
    padding-right: 7rem;
    padding-left: 5.188rem;
    padding-top: 7.1875rem;
    flex-basis: 40%;
  }

  &::before {
    position: absolute;
    content: ${({ year }) => `"${year}"`};
    font-weight: bold;
    color: var(--color-grey-10);
    font-size: 6.25rem;
    top: -4.5rem;
    right: 0;
    z-index: 1;
    line-height: 1;

    @media ${Queries.tabletUp} {
      font-size: 12.5rem;
      right: unset;
      left: 0;
      top: -6rem;
    }

    @media ${Queries.desktopUp} {
      left: 6rem;
      top: 1rem;
    }

    @media ${Queries.desktopUp} {
      font-size: clamp(9rem, 10vw, 12.5rem);
    }
  }
`

const Button = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  padding: 0.875rem 1rem;
  text-transform: uppercase;
  color: var(--color-white);
  font-size: 0.625rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s linear;

  @media ${Queries.tabletUp} {
    top: unset;
    bottom: 1rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  span {
    margin-left: 0.875rem;
    letter-spacing: 0.13375rem;
  }
`

type DescriptionProps = {
  year: number
}

const Description = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--color-grey-1);
  line-height: 2;
  margin-bottom: 4.25rem;
  z-index: 2;
  position: relative;

  @media ${Queries.tabletUp} {
    margin-bottom: 2.5rem;
  }

  @media ${Queries.laptopUp} {
    margin-bottom: 5.0625rem;
  }
`

const Link = styled.a`
  font-size: 0.5625rem;
  font-weight: bold;
  color: var(--color-grey-1);
  text-transform: uppercase;
  letter-spacing: 0.1206rem;

  @media ${Queries.tabletUp} {
    /* padding-left: 7.1875rem; */
  }
`

const painting = data[0]

const Slide: React.FC<Painting> = ({
  id,
  name,
  images,
  artist,
  year,
  description,
  source,
}): JSX.Element => {
  return (
    <Article>
      <Header>
        <Figure>
          <picture>
            <source media={Queries.tabletUp} srcSet={images.hero.large} />
            <img src={images.hero.small} alt="" />
          </picture>
          <Caption>
            <h1>{name}</h1>
            <p>{artist.name}</p>
            <ArtistImage>
              <img src={artist.image} alt="" />
            </ArtistImage>
          </Caption>
          <ArtistImageDesktop>
            <img src={artist.image} alt="" />
          </ArtistImageDesktop>
          <Button>
            <IconView />
            <span>View image</span>
          </Button>
        </Figure>
      </Header>
      <Body year={year}>
        <Description>{description}</Description>
        <Link href={source} target="_blank" rel="noopener noreferrer">
          Go to source
        </Link>
      </Body>
    </Article>
  )
}

export default Slide
