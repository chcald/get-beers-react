/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styles, cardsContainer } from './styles'
import BeerCard from './BeerCard'

const PostListContainer = ({ beers }) => (
  <div css={styles}>
    <div css={cardsContainer}>
      {beers && beers.map((x, index) => <BeerCard key={index} beer={x} />)}
    </div>
  </div>
)

export default PostListContainer
