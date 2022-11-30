import React from "react";
import styled from "styled-components";

import Box from "../Box";

const PageBox = styled(Box)`
  border-radius: 4px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
`;

const pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  console.log(currentPage, "hheheh");
  return (
    <Box
      style={{ cursor: "pointer" }}
      margin="40px 0px 50px 0px"
      display="flex"
      justifyContent="flex-end"
    >
      <PageBox border="1px solid #DFE3E8" onClick={prevPage}>
        {"<"}
      </PageBox>
      {pageNumbers.map((pgNumber) => (
        <PageBox
          margin="0px 5px"
          onClick={() => setCurrentPage(pgNumber)}
          border={`1px solid ${
            currentPage == pgNumber ? "#0052FE" : "#DFE3E8"
          }`}
        >
          {pgNumber}
        </PageBox>
      ))}
      <PageBox border="1px solid #DFE3E8" onClick={nextPage}>
        {">"}
      </PageBox>
    </Box>
  );
};

export default pagination;
