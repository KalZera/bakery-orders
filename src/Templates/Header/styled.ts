import styled from "styled-components";
import { colors } from "Styles/Colors";
export const Container = styled.header`
  background: ${colors.orange};
  height: 60px;
  width: 100%;
`;

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
`;
