import styled, { createGlobalStyle } from "styled-components";
import Forest from "Images/Forest.jpg";
import Plx from 'react-plx';
import { Input, List } from 'antd'

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
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
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
  color: whitesmoke;
  padding: 30px;
  background: black;
  margin: 0;
  font-size: 20px;
  opacity: 0.7;
`;

const TextInput = styled(Input)`
width: 80%;
    height: 100px;
    font-size: 40px;
    padding-left: 20px;
`

const ListItems = styled(List)`
    list-style: none;
    font-size: 40px;
    color: wheat
`

const SingleItem = styled(List.Item)`
    list-style: none;
    font-size: 40px;
    color: wheat
`

export { MainDiv, Title, Para, TextInput, ListItems, SingleItem }
