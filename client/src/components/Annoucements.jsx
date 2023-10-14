import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    
    
`

const Annoucements = () => {
  return (
    <Container>
        <span style={{marginTop:'5px'}} >Super Deals for Orders above 5000 Naira!</span>

    </Container>
  )
}

export default Annoucements