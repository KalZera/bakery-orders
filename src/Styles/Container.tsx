import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  ${media.lessThan("large")`
    width:100%;
  `}
`;
