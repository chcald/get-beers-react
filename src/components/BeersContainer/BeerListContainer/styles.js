import { css } from '@emotion/core'
import { colors } from 'theme'

export const styles = css`
  flex: 1 1 auto;
  display: flex;
  height: 0;
`

export const cardsContainer = css`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    width: 1rem;
    -webkit-box-shadow: inset -1px 0 0 0 rgba(144, 144, 144, 0.5),
      inset 1px 0 0 0 rgba(144, 144, 144, 0.5);
    box-shadow: inset -1px 0 0 0 rgba(144, 144, 144, 0.5),
      inset 1px 0 0 0 rgba(144, 144, 144, 0.5);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    width: 0.75rem;
    background: ${colors.white_grey};
  }
`

export default styles
