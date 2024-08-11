import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from './data';
import {mobile} from "../responsive";

const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({display: "none"})}

`
const Wrapper = styled.div`
    margin-top: 10px;
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${props =>props.SlideIndexer * -100}vw);
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg};

`
const ImageContainer = styled.div`
flex: 1;
height: 100%;
`
  
const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
flex:1;
padding: 80px;
`
const Title = styled.h1`
font-size:70px
  `
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
  
`
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {

 const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction)=>{

    if(direction === "left"){

      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)

    }else {

      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }

  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowLeftOutlined />
        </Arrow>
        <Wrapper SlideIndexer= {slideIndex}>
        {sliderItems.map((item)=>(


          <Slide bg={item.bg} key={item.id}>
          <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc} </Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            
          </Slide>
         
  ))}
          
          
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
        <ArrowRightOutlined/>
        </Arrow>
      
    </Container>
  )
}

export default Slider