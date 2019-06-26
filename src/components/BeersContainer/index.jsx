/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from './styles'

// Components
import BeerListContainer from './BeerListContainer'

const BeersContainer = ({ beers }) => {
  return (
    <div css={styles}>
      <BeerListContainer beers={beers} />
    </div>
  )
}

export default BeersContainer
