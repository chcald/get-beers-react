import { css } from '@emotion/core'
import { colors, fsize } from 'theme'

export const styles = css`
  display: flex;
  background-color: ${colors.black};
  height: 100vh;
  overflow-y: hidden;
  flex-direction: column;
  
  h2 {
    color: white;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    margin-top: 1rem;
    margin-left: 1.5rem;
    font-family: SFProDisplay;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #ffffff;
  }

  a {
    color: ${colors.light_grey};
    margin-left: 1.5rem;
    font-size: ${fsize.small};
  }
`

export const title = css`
  opacity: 0.5;
  font-family: SFProText;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 0.75rem;
`

export const description = css`
  opacity: 0.25;
  font-family: SFProText;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 0.75rem;
`


export const centerContent = css`
  display: flex;
  overflow-y: hidden;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export default styles
