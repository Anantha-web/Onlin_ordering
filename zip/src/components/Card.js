import React , { useState} from 'react';
import styled from 'styled-components'
function Card(props) {
    const [cost , setcost] = useState(0);
    
    
    return (
        <Container>
      <Photo><img src={props.img} alt="" /></Photo>
      <Name>{props.name}</Name>
      <Price> Price : {props.price}/-</Price>
      <Description>{props.description}</Description>
      <OrderNow><button onClick={()=>{setcost(cost + props.price)}}> Add to Cart</button></OrderNow>
  </Container>)
}
export default Card;

const Container = styled.div`
height:21rem;
width:15rem;
border:2px solid black;
`
const Photo = styled.div`
height:50%;
border-bottom:1px solid black;
object-fit: contain;
img{
    height:100%;
    width:100%;
}

`
const Name = styled.div`
height:10%;
display:flex;
justify-content:center;
align-items:center;
font-size:1.1rem;
`
const Price = styled.div`
display:flex;
align-items:center;
height:10%;
padding-top:5px;
padding-left:1rem;

`
const Description = styled.div`
height:14%;
padding-left:1rem;

`
const OrderNow = styled.div`
height:14%;
padding-left:1rem;
display:flex;
justify-content:center;
align-items:center;

button{
    background:none;
    border:1px solid black;
    box-shadow:1px 1px 3px black;
    border-radius:4px;
    width:7rem;
    cursor:pointer;
}
`
