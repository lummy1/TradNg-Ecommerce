import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import Navbar from '../components/Navbar';
import Annoucements from '../components/Annoucements';

import Footer from "../components/Footer";

const Container = styled.div``

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://moloyal.com/trads/banner1.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1000")
        center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Btn = styled.button`
  width: 40%;
  border: none;
  
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    
    <Container>
      <Navbar />
      <Annoucements />
      <FormContainer>
        <Wrapper>
            <Title>CREATE AN ACCOUNT       </Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
               
                <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
                <Btn>Submit</Btn>
            </Form>
        </Wrapper>
        </FormContainer>
        <Footer />
        
    </Container>
    
  )
}

export default Register