import React, { ReactNode } from "react";
import GlobalStyles from "../../common/styles";
import { Container, YellowBlob, PinkBlob, StyledLayout } from "./styles";
import CursorBox from "../CursorBox";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <CursorBox />
      <YellowBlob src="images/yellow-blob.svg" />
      <PinkBlob src="images/pink-blob.svg" />
      <Container>{React.Children.toArray(children)}</Container>
    </StyledLayout>
  );
};

export default Layout;
