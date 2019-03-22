import styled, { createGlobalStyle } from "styled-components";
import Forest from "Images/Forest.jpg";

/* eslint-disable */

createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Oxygen:400,700");

    body {
        font-family: 'Oxygen', sans-serif
    }
`;


const MainDiv = styled.div`
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

export default MainDiv
