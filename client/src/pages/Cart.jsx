import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Annoucements from '../components/Annoucements';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_KEY= process.env.REACT_APP_STRIPEKEY;




const Container = styled.div``
    
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})} 
`

const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopBtn = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor: pointer;

 border: ${props=>props.type==="filled" && "none" };
 background-color: ${props=>props.type==="filled" ? "black" : "transparent" };
 color: ${props=>props.type==="filled" && "white" };
`

const TopTexts= styled.div`
   ${mobile({display: "none"})}   
`

const TopText= styled.span`
 text-decoration: underline ;
 margin: 0px 10px;
 cursor: pointer;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})} 
`

const Info= styled.div`
  flex: 3;  
`

const Product = styled.div`

display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})} 
    
`
const ProductDetail = styled.div`
   flex:2; 
   display: flex;
`
const Image = styled.img`
    width: 200px 
`
const Details = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
      margin-bottom: 10px;  
`
const ProductId = styled.span`
    margin-bottom: 10px;  
`
const ProductColor = styled.div`
margin-bottom: 10px;  
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color };
`
const ProductSize= styled.span`
    
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmtContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
    
`
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px; 
   ${mobile({margin: "5px 15px"})}
`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;   
${mobile({marginBottom: "20px"})} 
`

const Hr = styled.hr`
    background-color: #eeee;
    border: none;
    height: 1px;
`

const Summary= styled.div`
   flex:1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;

`
const SummaryTitle = styled.h1`
font-size: 20px;
font-weight: 100;
display: flex;
align-items: center;
justify-content: center;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 20px;


font-weight: ${props=>props.type=== "total" && "500"};
font-size: ${props=>props.type=== "total" && "24px"};
`
const SummaryItemText = styled.div`
`
const SummaryItemPrice = styled.div`
`
const Btn = styled.button`
width: 100%;
padding: 10px;
font-weight: 600;
background-color: black;
color: white;
`
const Cart = () => {

   
    console.log(STRIPE_KEY);
    const [stripeToken, setStripeToken] = useState(null);
    const [updatedQuantity, setUpdatedQuantity] = useState(0);
    const cart = useSelector(state=>state.cart);

 console.log(cart);
 const onToken = (token) =>{
       
        setStripeToken(token);
       
    }
    console.log(stripeToken);

    useEffect(()=>{


    },[stripeToken])

  return (
    <Container>
        <Navbar />
        <Annoucements />
    <Wrapper>
        <Title> Product Cart </Title>
        <Top>
            <Link to="../">
            <TopBtn>CONTINUE SHOPPING</TopBtn>
            </Link>
            <TopTexts>
                <TopText>Shooping Bag({cart.count})</TopText>
                <TopText>Your Wishlist(5)</TopText>
            </TopTexts>
            <TopBtn type="filled">CHECKOUT NOW</TopBtn>
        </Top>
        <Bottom>
            <Info>
            {cart.products.map((product) => (

                <Product key={product._id}>
                    <ProductDetail>
                       <Image src={product.image} />
                       <Details>
                        <ProductName><b>Product: </b>{product.title}</ProductName>
                        <ProductId><b>ID: </b>{product._id}</ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                       </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmtContainer>
                            <Add onClick={()=>
                                console.log("clicked")
                                //item.quantity+1
                            } />
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove onClick="handleClick(dec)" />
                        </ProductAmtContainer>
                        <ProductPrice>N {product.price * product.quantity}</ProductPrice>
                    </PriceDetail>
                </Product>
               
               
            ))
            
            }
                
               
               
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>N {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Delivery Estimate </SummaryItemText>
                    <SummaryItemPrice>N 100</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Delivery Discount</SummaryItemText>
                    <SummaryItemPrice>N - 100</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem  type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>N {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
       name = "Tradng. Store"
       image = "https://business23.web-hosting.com:2096/cpsess9103547663/3rdparty/roundcube/skins/elastic/images/logo.svg?s=1670945592"
       billingAddress
       shippingAddress
       description={`Your total is N${cart.total}`}
       amount={cart.total*100}
       token={onToken}
        stripeKey={STRIPE_KEY}
      > 
                <Btn >CHECKOUT NOW</Btn>
            </StripeCheckout>
            </Summary>
        </Bottom>
    </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart