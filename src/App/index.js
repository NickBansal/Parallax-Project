import React from "react";
import styled from "styled-components";
import LakeImage from "../Images/Lake.jpg";

const Main = styled.div`
  text-align: center;
  font-family: 'Oxygen', sans-serif;
`;

const Image = styled.img`
  width: 100%;
`;

const App = () => (
  <Main>
    <h1>Hello</h1>
    <Image src={LakeImage} alt="Lake" />
  </Main>
);


export default App;
