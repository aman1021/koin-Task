import React from "react";
import styled from "styled-components";
import Box from "../Box";
import Text from "../Text";

const tags = ["Favourites", "Cryptocurrencies", "DeFi", "NFTs & Collectibles"];

const Container = styled(Box)`
  padding: 10px 150px 25px;
  background: #f8fafc;

  @media (max-width: 700px) {
    padding: 30px 20px;
  }
`;

const Title = styled(Text)`
  margin: 0px 0px 30px 0px;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 700px) {
    margin: 0px 0px 30px 0px;
    font-size: 18px;
    font-weight: 500;
  }
`;

const DifferentCurrencies = () => {
  const selected = "Cryptocurrencies";
  return (
    <Container>
      <Title margin="0px 0px 30px 0px" fontSize="24px" fontWeight="700">
        Top 100 Cryptocurrencies By Market Cap
      </Title>
      <Box display="flex" fontSize="12px" fontWeight="600">
        {tags.map((tag) => (
          <Box
            padding="7px"
            background="#EFF2F5"
            height="32px"
            borderRadius="8px"
            margin="0px 16px 0px 0px"
            color={tag == selected ? "#3861FB" : "#000000"}
          >
            <Text>{tag}</Text>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default DifferentCurrencies;
