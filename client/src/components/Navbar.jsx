import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';



const Container = styled.div`
width: 100%;
height: 60px;
padding: 0px 0px 5px;
${mobile({height: "50px", paddingBottom: "5px"})}

`

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "0px 0px"})}
`;

const Left = styled.div`
flex: 1;  
display: flex;
align-items: center;  
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "10px"})}
`

const Input = styled.input`
 border: none;
 ${mobile({width: "50px"})}
`

const Center = styled.div`
  flex: 1;  
  text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: none;
    ${mobile({fontSize: "20px"})}
`

const Right = styled.div`
  flex: 1;  
  display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center"})}
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "12px", marginLeft: "10px"})}
`
const LogoItem = styled.div`

cursor: pointer;
 text-decoration: none;

`

const Navbar = () => {

    const count = useSelector(state=>state.cart.count);
   
        
        // const dispatch = useDispatch();
        // const logout = () => dispatch(authActions.logout());
    
        // only show nav when logged in
       // if (!auth) return null;
    //console.log(cart.count);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:"grey", fontSize:16}}/>

                    </SearchContainer>
                </Left>
                <Center>
                <Link to="/"> <Logo> <LogoItem>TradNg.</LogoItem></Logo></Link>
                </Center>
                <Right>
                <Link to="../register"> <MenuItem>REGISTER</MenuItem></Link>
                <Link to="../login"> <MenuItem>SIGN IN</MenuItem></Link>
                    <Link to="../cart">
                    <MenuItem>
                        <Badge color="primary" badgeContent={count}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar