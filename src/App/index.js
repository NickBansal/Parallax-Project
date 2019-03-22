import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";
// import MainDiv from "Theme";
import Plx from 'react-plx';
import Forest from "Images/Forest.jpg";

const Title = styled.h1`
  color: white;
  position: absolute;
  text-shadow: 2px 2px 2px black;
  font-size: 45px
`;

const Para = styled.p`
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

const style = {
  textAlign: 'center',
  fontFamily: 'Oxygen, sans-serif',
  position: 'relative',
  backgroundImage: `url(${Forest})`,
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  paddingTop: '20px',


  display: 'flex',
  justifyContent: 'center'
}

const parallaxData = [
  {
    start: '60px',
    end: '500px',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'height',
        unit: 'vh'
      },
    ],
  },
];

const App = () => (
  <div style={{ height: '3000px' }}>

    <Plx
      style={style}
      parallaxData={parallaxData}
    >
      {/* <MainDiv> */}
      <Title>Parallax</Title>
      {/* </MainDiv> */}
    </Plx>
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
  </div>
);


export default hot(App);
