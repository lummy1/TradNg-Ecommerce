import React from 'react'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div``
    
const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TopBtn = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;

 border: ${props=>props.type==="filled" && "none" };
 background-color: ${props=>props.type==="filled" && "none" };
 color: ${props=>props.type==="filled" && "none" };
`

const TopTexts= styled.div`
    
`

const TopText= styled.span`
 text-decoration: underline ;
 margin: 0px 10px;
 cursor: pointer;
`
const Bottom = styled.div``


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Annoucements />
    <Wrapper>
        <Title> Product Cart </Title>
        <Top>
            <TopBtn>CONTINUE SHOPPING</TopBtn>
            <TopTexts>
                <TopText>Shooping Bag(2)</TopText>
                <TopText>Your Wishlist(5)</TopText>
            </TopTexts>
            <TopBtn type="filled">CHECKOUT NOW</TopBtn>
        </Top>
        <Bottom></Bottom>
    </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart