import React from "react";

import Box from "../../components/Box";
import Cards from "../../components/cards";
import Header from "../../components/Header";
import Table from "../../components/Table";
import DifferentCurrencies from "../../components/top/DifferentCurrencies";

function index() {
  return (
    <Box>
      <Header />
      <Cards />
      <DifferentCurrencies/>
      <Table />
    </Box>
  );
}

export default index;
