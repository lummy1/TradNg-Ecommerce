import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'


const Container= styled.div``
const Wrapper= styled.div`
display: flex;
padding: 50px;
`


const ImgContainer= styled.div`
flex:1;
`
const Img= styled.img`
width: 80%;
height: 70vh;
object-fit: cover;

`
const InfoContainer= styled.div`
flex:1;
padding: 0px 50px;
`
const Title= styled.h1`
font-weight: 200;
`

const Desc= styled.p`
margin: 20px 0px;
`

const Price= styled.span`
font-weight:100;
font-size: 40px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
display: flex;
align-items:center;

`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
margin: 0px 5px;
cursor: pointer;
`



const SizeSelect = styled.select`
padding:5px;
margin-left:10px;
`
  
const SizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-between;
`

const QtyContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
cursor: pointer;
`



const Qty = styled.span`
width: 30px;
height: 30px;
border-radius: 10%;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;
`

const Btn = styled.button`
padding: 15px;
background-color: white;
border: 2px solid teal;
cursor: pointer;
&:hover {
  background-color: #f4cece;
}
`

const SingleProduct = () => {
  return (
    <Container>
        <Navbar />
        <Annoucements />
        <Wrapper>
          <ImgContainer>
          <Img src="https://ecoms.imgix.net/banner/couple7.png" />
          
          </ImgContainer>
          <InfoContainer>
            <Title>Tester Product</Title>
            <Desc>Tester ProductTester ProductTester ProducTester ProductTester 
            ProductTester ProductTester ProductTester ProductTester ProductTeste
            r ProductTester ProductTester Productt
            </Desc>
            <Price>N200</Price>
            <FilterContainer>
              <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="darkblue" />
                  <FilterColor color="brown" />
              </Filter>
              <Filter>
              <FilterTitle>Size</FilterTitle>
                 <SizeSelect>
                    <SizeOption>XS</SizeOption>
                    <SizeOption>S</SizeOption>
                    <SizeOption>M</SizeOption>
                    <SizeOption>L</SizeOption>
                    <SizeOption>XL</SizeOption>
               </SizeSelect>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <QtyContainer>
                <Remove/>
                <Qty>
                  1
                </Qty>
                <Add/>
              </QtyContainer>
              <Btn>ADD TO CART</Btn>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
            <Footer />
    </Container>
  )
}

export default SingleProduct