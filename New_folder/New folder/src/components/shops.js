import React from 'react';
import styled from 'styled-components'
import {shops} from './shopName'
import ShopCard from './ShopCard'
const Shops = () => {
  return (
      <>
      <Head>
          Shops
      </Head>
  <Container>
          {shops.map((items,key)=><ShopCard name={items.name} photo={items.photo} food={items.food} link={items.link}/>)}
      </Container>
  
      </>
  )};

export default Shops;

const Container = styled.div`
margin-top: 4rem;
padding-top:3rem;
margin-bottom:8.5rem;
display: grid;
grid-template-columns: repeat(3,30%);
justify-items: center;
align-items: center;
gap: 3rem;`

const Head = styled.div`
height:4rem;
font-size:3rem;
width:100%;text-align:center;
`