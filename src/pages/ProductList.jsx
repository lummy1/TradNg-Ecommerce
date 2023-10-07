import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'

const Container = styled.div``
const Title = styled.h1``

const FilterContainer = styled.div``

const Filter = styled.div``
    

const ProductList = () => {
  return (
    <Container>
         <Annoucements />
         <Navbar/>
       
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>Filter1</Filter>
            <Filter>Filter2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList