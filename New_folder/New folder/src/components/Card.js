import React , { useState , useEffect} from 'react';
import styled from 'styled-components'
import {cartItems} from '../features/cartSlice'
import { useSelector ,useDispatch } from 'react-redux';

function Card(props) {
    const dispatch = useDispatch();

    // const user = useSelector(cartInfo)
    const [state,setstate] = useState('red.png');
    const type = ()=>{
        if(props.type=="veg"){
            setstate( "green.png")
        }
        else{
            setstate( "red.png")
        }
    }

    const onClick=()=>{
        dispatch(cartItems({
            itemPrice:props.price,
            itemName:props.name,
            itemImg :props.img,
            
        }));
    }

    useEffect(()=>{
        type();
    },[])
    
    return (
        <Container>
            <Type><img src={state} alt="" /></Type>
      <Photo><img src={props.img} alt="" /></Photo>
      <Name>{props.name}</Name>
      <Price> Price : {props.price}/-</Price>
      <Description>{props.description}</Description>
      <OrderNow><button onClick={onClick}> Add to Cart</button></OrderNow>
  </Container>)
}
export default Card;
const Type = styled.div`
position:absolute;
width:2rem;
height:2rem;
img{
    width:100%;
    height:100%;
}`
const Container = styled.div`
position:relative;
height:21rem;
width:15rem;
border:2px solid black;
transition:all 0.3s;
border-radius:8px;
&:hover{
    box-shadow:1px 1px 6px black;
    transform:scale(1.1);
    transition:all 0.2s;

}
`
const Photo = styled.div`
height:50%;
border-bottom:1px solid black;
object-fit: contain;
img{
    height:100%;
    width:100%;
    border-radius:8px;

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
