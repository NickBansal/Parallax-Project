import styled, { createGlobalStyle } from "styled-components";
import Forest from "Images/Forest.jpg";
import Plx from 'react-plx';

/* eslint-disable */

createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Oxygen:400,700");

    body {
        font-family: 'Oxygen', sans-serif
    }
`;


const MainDiv = styled(Plx)`
  text-align: center;
  font-family: 'Oxygen', sans-serif;
  position: relative;
  background-image: url(${Forest});
  background-position: center;
  width: 100%;
  height: 100vh;
  padding-top: 20px
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  text-shadow: 2px 2px 2px black;
  font-size: 65px
`;

const Para = styled(Plx)`
  position: absolute;
  bottom: 0;
  left: 0;
  color: grey;
  padding: 50px;
  background: whitesmoke;
  margin: 0;
  font-size: 20px;
  opacity: 0.7;
`;

export { MainDiv, Title, Para }
