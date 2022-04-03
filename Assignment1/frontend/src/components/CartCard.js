import React from 'react';
import styled from 'styled-components'
const CartCard = (props) => {
  return(
        <Container>
        <Img>
        <img src={props.img} alt="" /></Img>
        <Name>
          {props.name}
        </Name>
        <Price>
          {props.price}
        </Price>
        </Container>
  )
};

export default CartCard ;

const Container = styled.div`
width:80%;
height:4rem;
border:2px solid black;
`
const Img = styled.div``
const Name =styled.div``
const Price = styled.div``