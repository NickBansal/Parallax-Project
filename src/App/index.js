import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
import LakeImage from "../Images/Lake.jpg";

const Main = styled.div`
  text-align: center;
  font-family: 'Oxygen', sans-serif;
  position: relative
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%)
`;

const Image = styled.img`
  width: 100%;
  `;

const Para = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  color: grey;
  padding: 50px;
  background: whitesmoke;
  margin: 0;
  font-size: 17px;
  opacity: 0.7;
`;

const App = () => (
  <Main>
    <Title>Main Page</Title>
    <Image src={LakeImage} alt="Lake" />
    <Para>
      {`Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC, 
      making it over 2000 years old.
      Richard McClintock, a Latin professor at 
      Hampden-Sydney College in Virginia, looked up one of the more 
      obscure Latin words, consectetur, from a Lorem Ipsum passage, 
      and going through the cites of the word in classical literature, 
      discovered the undoubtable source. Lorem Ipsum comes from sections 
      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
      (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
      This book is a treatise on the theory of ethics, 
      very popular during the Renaissance. The first line of Lorem Ipsum, 
      "Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.`}
    </Para>
  </Main>
);


export default hot(App);
