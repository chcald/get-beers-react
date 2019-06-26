import { css } from '@emotion/core'

export const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  content {
    width: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

export default styles
