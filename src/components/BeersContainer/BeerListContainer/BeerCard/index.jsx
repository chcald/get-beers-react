import { useState } from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {
  styles,
  abv_container,
  top_content_container,
  beer_info_container,
  beer_name_container,
  beer_description_container,
  bottom_content_container,
  icons_container,
  postHovering,
  bottom_see_more
} from './styles'

import { rowAndAlign } from 'theme'

// Icons
import SavedOnIcon from 'static/icons/saved-on.svg'
import SavedOffIcon from 'static/icons/saved-off.svg'

const BeerCard = ({ beer }) => {
  const [isBeingHovered, setShowIcons] = useState(false)
  const [favourite, setFavourite] = useState(false);
  return (
    <div
      css={[styles, postHovering]}
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}>
      <div>
        <div css={top_content_container}>
          <div css={rowAndAlign}>
            <div css={beer_info_container}>
              <div css={[rowAndAlign, beer_name_container]}>
                <h5>{beer.name}</h5>
              </div>
              <div css={[rowAndAlign, beer_description_container]}>
                <p>{beer.description}</p>
              </div>
            </div>
            <div css={abv_container}>
              <p>{beer.abv}%</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div css={bottom_content_container}>
          <div css={bottom_see_more} >
            <a href={`/beers/detail/${beer.id}`}>{`See more...`}</a>
          </div>
          <div css={icons_container}>
            {
              isBeingHovered && <div onClick={() => setFavourite(favourite ? false : true)}>
                {<img src={favourite ? SavedOnIcon : SavedOffIcon} alt='favourite' />}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard
