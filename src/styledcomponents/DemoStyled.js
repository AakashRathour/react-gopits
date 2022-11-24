import React from "react";
import styled from "styled-components";

const DemoStyled = () => {
  const Titile = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <>
      <Titile>
        <h1>DemoStyled</h1>
      </Titile>
    </>
  );
};

export default DemoStyled;
