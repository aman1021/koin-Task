import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Box from "../Box";
import Text from "../Text";
import { API_URL } from "../../const";
import greenArrow from "../../icons/greenArrow.svg";
import redArrow from "../../icons/redArrow.svg";
import Pagination from "../pagination/pagination";

const COLUMN = [
  {
    title: "",
    width: "4%",
  },
  {
    title: "#",
    width: "4%",
  },
  {
    title: "NAME",
    width: "18%",
  },
  {
    title: "PRICE",
    width: "8%",
  },
  {
    title: "24H",
    width: "8%",
  },
  {
    title: "7D",
    width: "8%",
  },
  {
    title: "MARKET CAP",
    width: "15%",
  },
  {
    title: "VOLUME(24H)",
    width: "15%",
  },
  {
    title: "CIRCULATING SUPPLY",
    width: "15%",
  },
];

const rowStyle = [
  {
    width: "4%",
  },
  {
    width: "4%",
  },
  {
    width: "18%",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "24px",
  },
  {
    width: "8%",
    fontSize: "14px",
    fontWeight: "500",
  },
  {
    width: "8%",
    fontSize: "13px",
    fontWeight: "600",
    color: "#EA3943",
  },
  {
    width: "8%",
    fontSize: "13px",
    fontWeight: "600",
    color: " #16C784",
  },
  {
    width: "15%",
    fontSize: "14px",
    fontWeight: "500",
  },
  {
    width: "15%",
    textTransform: "uppercase",
  },
  {
    width: "15%",
    textTransform: "uppercase",
  },
];

const TableHeader = styled(Text)`
  font-weight: 700;
  font-size: 11px;
  color: #000000;
`;

const Container = styled(Box)`
  padding: 0 150px;
  @media (max-width: 1200px) {
    padding: 0 60px;
  }
  @media (max-width: 950px) {
    padding: 0 20px;
  }
`;

const Row = styled(Box)`
  display: flex;
  padding: 14px 0;
  border-bottom: 1px solid #eff2f5;
  align-items: center;
`;

const smallDeviceColumnWidth = ["0", "0", "40%", "40%", "20%"];

const Column = styled(Box)`
  @media (max-width: 800px) {
    display: ${({ index }) => (index > 4 || index < 2 ? "none" : "flex")};
    width: ${({ index }) => `${smallDeviceColumnWidth[index]} !important`};
  }
`;

const TableData = styled(Box)`
  overflow: hidden;
`;

function Index() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const url = `${API_URL}&per_page=${recordsPerPage}&page=${currentPage}`;
    fetch(url)
      .then((response) => response.text())
      .then((response) => JSON.parse(response))
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error));
  }, [currentPage]);

  const buildRow = (rowData, style) => {
    const {
      market_cap_rank,
      name,
      symbol,
      image,
      current_price,
      market_cap,
      fully_diluted_valuation,
      total_volume,
      circulating_supply,
      price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency,
    } = rowData;

    const content = [
      <Box></Box>,
      <TableData>{market_cap_rank}</TableData>,
      <Box display="flex">
        <img src={image} height="20px" width="20px" />
        <TableData> &nbsp; {name} </TableData>
        <TableData style={{ color: "#808A9D" }}>&nbsp; {symbol}</TableData>
      </Box>,
      <TableData>${current_price}</TableData>,
      <TableData>
        <img src={redArrow} />
        &nbsp;{price_change_percentage_24h_in_currency.toFixed(2)}%
      </TableData>,
      <TableData>
        <img src={greenArrow} />
        &nbsp; {price_change_percentage_7d_in_currency.toFixed(2)}%
      </TableData>,
      <TableData>${market_cap}</TableData>,
      <Box>
        <TableData style={{ fontSize: "14px", fontWeight: "500" }}>
          ${fully_diluted_valuation}
        </TableData>
        <TableData
          style={{ fontSize: "12px", fontWeight: "500", color: "#808A9D" }}
        >
          {total_volume} {symbol}
        </TableData>
      </Box>,
      <TableData style={{ fontSize: "14px", fontWeight: "500" }}>
        {circulating_supply}&nbsp;{symbol}
      </TableData>,
    ];

    return (
      <Row>
        {content.map((row, index) => (
          <Column style={rowStyle[index]} index={index}>
            {row}
          </Column>
        ))}
      </Row>
    );
  };

  return (
    <Container>
      <Row borderTop="1px solid #EFF2F5">
        {COLUMN.map(({ title, width }, index) => (
          <Column width={width} index={index}>
            <TableHeader>{title}</TableHeader>
          </Column>
        ))}
      </Row>
      {data.map((rowData) => buildRow(rowData))}
      <Pagination
        nPages={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

export default Index;
