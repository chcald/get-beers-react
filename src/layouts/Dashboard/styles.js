import { css } from "@emotion/core";
import { colors } from "theme";

const styles = css`
  background-color: ${colors.black};
  height: 100vh;
  display: flex;
  flex-flow: column;
  overflow-y: hidden;

  main {
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  content {
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
  }
`;

export default styles;
