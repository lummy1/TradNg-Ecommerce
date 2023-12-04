import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { publicRequest } from '../requestMethods'


const Container= styled.div``

const Wrapper= styled.div`
display: flex;
padding: 50px;
${mobile({padding: "10px", flexDirection:"column"})} 
`


const ImgContainer= styled.div`
flex:1;
`
const Img= styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh"})} 

`
const InfoContainer= styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding: "10px"})} 
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
${mobile({width: "100%"})} 
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
${mobile({width: "100%"})} 
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

  const location = useLocation();
  const id= location.pathname.split("/")[2];
  console.log(id);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");


  useEffect(()=>{

    const getProduct = async ()=>{

      try {

        const response= await publicRequest.get("/products/"+id)
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        
        console.log(error);
      }

    }

    getProduct();
  }, [id])

  const handleQuantity = (type)=>{

      if(type === "dec"){

        quantity > 1 && setQuantity(quantity - 1);
      }else{
        setQuantity(quantity + 1);
      }

  }

  console.log(color);
  console.log(size);
  return (
    <Container>
        <Navbar />
        <Annoucements />
        <Wrapper>
          <ImgContainer>
          <Img src={product.image} />
          
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}
            </Desc>
            <Price>N{product.price}</Price>
            <FilterContainer>
              <Filter>
                  <FilterTitle>Color</FilterTitle>
                  {product.color?.map((c)=>(

                    <FilterColor color={c} key={c} onClick={() => setColor(c)}/>

                  ))}
                  
              </Filter>
              <Filter>
              <FilterTitle>Size</FilterTitle>
                 <SizeSelect  onChange={(e) => setSize(e.target.value)}>
                   
                    {product.size?.map((s)=>(

                      <SizeOption key={s} >{s}</SizeOption>


                    ))}
                  
               </SizeSelect>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <QtyContainer>
                <Remove onClick={(e)=> handleQuantity("dec")} />
                <Qty>
                  {quantity}
                </Qty>
                <Add onClick= {e=> handleQuantity("inc")}/>
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