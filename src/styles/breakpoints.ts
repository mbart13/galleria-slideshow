const BREAKPOINTS = {
  tabletMin: 700,
  laptopMin: 1000,
  desktopMin: 1150,
}

const Queries = {
  tabletUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
}

export default Queries
