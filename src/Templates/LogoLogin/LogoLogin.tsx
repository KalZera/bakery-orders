import React, { FunctionComponent } from "react";

import { PhotoApp } from "./styled";

interface Props {}

export const LogoLogin: FunctionComponent<Props> = () => {
  return (
    <>
      <PhotoApp>
        <img src="/Images/bread2.png" alt="" width={200} />
      </PhotoApp>
    </>
  );
};
