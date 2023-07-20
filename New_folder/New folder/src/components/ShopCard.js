import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const ShopCard = (props) => {
  return (
      <Container>
        <Image>
            <img src={props.photo}  />
        </Image>
        <Name><span>Shop Name : {props.name}</span></Name>
        <FoodType><span>Food-Type:{props.food}</span></FoodType>
        <NavLink to={`${props.link}`}><button>Visit </button></NavLink>
      </Container>
  );
};

export default ShopCard;

const Container = styled.div`
width:70%;
height:22rem;
border-radius:4px;
border:2px solid black;
button{
    cursor:pointer;
    box-shadow:2px 1px 3px black;
    margin-left:2rem;
    width:80%;
    height:2rem;
    border:none;
    outline:none;
    opacity:0.7;
    background:rgba(0,0,0,0.8);
    color:white;
}
`
const Image = styled.div`
width:100%;
height:50%;
img{
    width:100%;
    height:100%;

}`
const Name = styled.div`
height:15%;
text-align:center;
display:flex;
justify-content:center;
align-items:center;

`
const FoodType = styled.div`
height:15%;
text-align:center;

`