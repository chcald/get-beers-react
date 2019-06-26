import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 22.09rem;
  box-shadow: inset 0 -1px 0 0 rgba(144, 144, 144, 0.5);
`

export const postHovering = css`
  :hover {
    background-color: ${colors.hover_blue};
  }
`

export const postSelected = css`
  background-color: ${colors.light_grey};
`

export const abv_container = css`
  margin-right: 0.5rem;
  margin-top: 1.25rem;
  align-self: flex-start;

  p {
    font-size: 1rem;
    color: ${colors.white_grey};
  }
`

export const top_content_container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h5 {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`

export const bottom_see_more = css`
  margin: 0.4rem;
  font-size: ${fsize.small};
`
export const beer_info_container = css`
  p {
    color: ${colors.white_grey};
  }
`

export const beer_name_container = css`
  * {
    margin-right: 0.375rem;
    margin-left: 0.75rem;
  }
  margin-top: 0.55rem;
`

export const beer_description_container = css`
  * {
    margin-right: 0.375rem;
    margin-left: 0.75rem;
  }
`

export const bottom_content_container = css`
  * {
    color: ${colors.white_grey};
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.75rem 0.75rem 0.75rem;
`

export const icons_container = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  * {
    margin-right: 0.5rem;
  }
`
