import React from "react";
import styled from "styled-components";

import Menu from "../../icons/Menu";
import Logo from "../../icons/Logo";
import Search from "../../icons/Search";
import Box from "../Box";

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
  color: #000000;
  margin: 0 10px;
`;

const Container = styled.div`
  display: flex;
  padding: 15px 180px;
  border-bottom: 1px solid #e5e5e5;
  @media (max-width: 1000px) {
    padding: 15px 80px;
  }
  @media (max-width: 700px) {
    padding: 15px 60px;
  }
  @media (max-width: 500px) {
    padding: 15px 30px;
  }
`;

const ContentBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const header = () => {
  return (
    <Container>
      <ContentBox>
        <Logo />
        <Title> Crypto Tracker</Title>
      </ContentBox>
      <ContentBox marginLeft="auto">
        <Search />
        <Box marginLeft="20px">
          <Menu />
        </Box>
      </ContentBox>
    </Container>
  );
};

export default header;
