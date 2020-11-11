import styled from "styled-components";

import { colors } from "Styles/Colors";

export const Content = styled.div`
  border: 1px solid ${colors.greyLight};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 10px;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
`;

export const FieldForm = styled.div`
  width: 500px;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
`;
