import React from "react";
import { Spinner } from "reactstrap";
import styled from "styled-components";

const containerStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  zIndex: 1;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  height: 100%;
  width: 100%;
  ${containerStyle};

  span {
    display: none;
  }
`;

const Container = styled.div`
  height: ${({ height }) => height || "100%"};
  width: 100%;
  ${containerStyle};

  span {
    display: none;
  }
`;

const Loader = () => {
  return (
    <MainContainer>
      <Spinner animation="border" variant="success" role="status" />
    </MainContainer>
  );
};

export default Loader;
