import { useMediaQuery } from 'react-responsive'

const MOBILE_MAX_WIDE = '1000px'

export const useIsMobile = () => {
  const isMobileMaxWide = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDE})` })
  return isMobileMaxWide
}
