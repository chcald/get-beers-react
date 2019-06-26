import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  background-color: ${colors.light_grey};
  border-radius: 10px;
  width: 50rem;
  padding: 1rem;
  font-family: SFProText;
  list-style: none;
  p {
    font-size: ${fsize.small};
    color: white;
  }
`
export const abv_container = css`
  margin-right: 0.5rem;
  margin-top: -3.75rem;
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

  p {
    font-size: 0.875rem;
  }

  h5 {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const beer_info_container = css`
  p {
    color: ${colors.white_grey};
  }
`;

export const beer_name_container = css`
  * {
    margin-right: 0.375rem;
  }

`;

export const beer_description_container = css`
  * {
    height: 100%;
    margin-right: 0.375rem;
  }
`;

export const icon_container = css`
  padding-left:  47.8rem;
  p {
    color: white;
  }
`;

export const beer_image_container = css`
width: 16rem;
height: 14rem;
`

export const middle_content_container = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;
export default styles
