import React from "react";
import styled from "styled-components";

import green from "../../icons/green.svg";
import quiz from "../../icons/quiz.svg";
import purple from "../../icons/purple.svg";
import Box from "../Box";
import Text from "../Text";
import rightArrow from '../../icons/rightArrow.svg'
import leftArrow from '../../icons/leftArrow.svg'

import { Row, Col, Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

// from https://react-slick.neostack.com/docs/example/custom-arrows
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} style={{}} onClick={onClick}>
      <img src={rightArrow} height="30px" width="30px"  />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{}} onClick={onClick}>
      <img src={leftArrow} height="30px" width="30px" />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Card = styled(Box)`
  display: flex;
  padding: 20px;
  background: #fff;
  width: 400px;
  border-radius: 12px;
`;

const cardContent = [
  {
    id: 1,
    img: quiz,
    text: "Take a Quiz",
    desc: "Learn And Earn $CKB",
  },
  {
    id: 2,
    img: green,
    text: "Portfolio",
    desc: "Track Your trades in On Place not All over the place",
  },
  {
    id: 3,
    img: purple,
    text: "Portfolio",
    desc: "Track Your trades in On Place not All over the place",
  },
];

const StyledImg = styled.img`
  height: 80px;
  width: 80px;
`;

const Container = styled(Box)`
  .slick-track{
    display: flex;
    align-items: center;
  }
  .slick-slide.slick-current{
    width: 400px !important;
  }
  .slick-slide.slick-current>div>div{
    display: flex !important;
  }
  .slick-list{
    margin-left: 10px;
  }
`;

const CarouselArrows = () => {
  return (
    <Container>
      <Row justify="center">
        <Col span={16}>
          <Carousel arrows {...settings}>
            {cardContent.map((item) => (
              <Card key={item.id} className="card-carousel">
                <StyledImg src={item.img} />
                <Box marginLeft="20px">
                  <Text fontWeight="400" fontSize="18px" color="#656C7E">
                    {item.text}
                  </Text>
                  <Text fontWeight="500" fontSize="20px" color="#000000">
                    {item.desc}
                  </Text>
                </Box>
              </Card>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

const Cards = () => {
  if (window.innerWidth < 800) {
    return <CarouselArrows />;
  }

  return (
    <Box
      padding="40px 140px 20px"
      display="flex"
      background="rgba(248, 250, 252)"
      justifyContent="space-around"
    >
      {cardContent.map((item) => (
        <Card key={item.id}>
          <StyledImg src={item.img} />
          <Box marginLeft="20px">
            <Text fontWeight="400" fontSize="18px" color="#656C7E">
              {item.text}
            </Text>
            <Text fontWeight="500" fontSize="20px" color="#000000">
              {item.desc}
            </Text>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
