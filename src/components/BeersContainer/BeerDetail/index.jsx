
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { rowAndAlign } from 'theme'
import {
  styles,
  top_content_container,
  beer_name_container,
  beer_info_container,
  abv_container,
  beer_description_container,
  middle_content_container,
  beer_image_container
} from './styles'

const BeerDetail = ({ beer }) => (
  <div css={styles}>
    {beer &&
      <div>
        <div css={top_content_container}>
          <div css={rowAndAlign}>
            <div css={beer_info_container}>
              <div css={[rowAndAlign, beer_name_container]}>
                <h5>{beer.name}</h5> &nbsp;&nbsp;
                <p>{`"${beer.tagline}"`}</p>
              </div>
              <div css={[rowAndAlign, beer_description_container]}>
                <div css={rowAndAlign}>
                  <div css={beer_image_container}>
                    <img src={beer.image_url} alt='image beer' />
                  </div>
                  <div>
                    <p>{beer.description}</p>
                  </div>
                </div>
                <div css={abv_container}>
                  <p>{beer.abv}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div css={middle_content_container}>
          <div>
            <p>{`contributed by ${beer.contributed_by}`}</p>
          </div>
        </div>
      </div>
    }
  </div>
)

export default BeerDetail
