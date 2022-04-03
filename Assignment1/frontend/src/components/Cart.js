import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import styled from 'styled-components'
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { cartInfo } from '../features/cartSlice';
import { useHistory } from 'react-router-dom';



const Cart = () => {
    const history = useHistory();
        const items = useSelector(cartInfo);
        

    const HomePage =()=>{
        alert('Order Placed Successfully');
        history.push('./home1')

    }
  return (
      <>
      <Menu />
      <Container>
          <Head>
              Cart
          </Head>
          <hr />
          <Main>
              {/* {getItem} */}
              <CartCard   />
             
          </Main>

          <Checkout>
              <Subtotal>Your Total is: </Subtotal>
              <Button><button onClick={HomePage}>Place Order</button></Button>
          </Checkout>
      </Container>

      </>
  )
};

export default Cart;

const Checkout =styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
height:4rem;
background:rgba(198,197,132,0.5);
position:absolute;
bottom:0;
gap:9rem;
`
const Subtotal = styled.div``
const Button = styled.div`
button{
    width:7rem;
    height:2rem;
    border-radius:4px;
    border:1px solid gray;
    background:#4FF231;
    cursor:pointer;
    box-shadow:1px 2px 4px black;
}
`
const Container = styled.div`
`

const Head = styled.div`
padding:0 3rem;
font-size:4.5rem;
`
const Main = styled.div`
padding:0 3rem;
`