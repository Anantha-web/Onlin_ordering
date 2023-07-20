import React ,{useState} from 'react';
import styled from'styled-components'
import { Switch , Route,NavLink} from 'react-router-dom'
import App from './All'
function Menu() {
const [vale , setval] = useState('');
  return(<>
    <Nav>
    <Logo>
      <img src="./vada-pav.png" alt="" />
    </Logo>
    <NavBar>
      <Title>
        College Canteen
        <input type="text" placeholder="Search fo items" onChange={event =>setval(event.target.value)} />
        <button onClick={()=>console.log(vale)}>Search</button>


      </Title>
        <NavItems>
          <NavLink exact activeClassName='active_class' to="/home1">  All</NavLink>
          <NavLink exact activeClassName='active_class' to="/addon">  Addons</NavLink>
        </NavItems>

    </NavBar>
  </Nav>
  </>
  )
}

export default Menu;


const Nav = styled.div`
position:sticky;
display:flex;
height:10%;
width:100%;
border-bottom:2px solid black;
`
const Logo=styled.div`
height:100%;
width:10%;
object-fit: contain;
display:flex;
justify-content: center;
align-items:center;
img{
  width:25%;
  height:50%;
}
`
const NavBar = styled.nav`
width:90%;
position:relative;
display:flex;
padding: 0 4rem;

justify-content: space-between;

`
const NavItems = styled.div`
display:flex;
gap:2rem;
height:100%;
align-items:center;
justify-content: center;
color:black;
a{
    text-decoration: none;
    font-size:1.1rem;
    cursor:pointer;
}

`
const Title = styled.div`
font-size:2rem;
display:flex;
justify-content: center;
align-items:center;
input{
  margin-left:2rem;
  margin-right:1rem;
  width:20rem;
  height:50%;
  border-radius:4px;
}
button{
  background:white;
  border-radius:4px;
  width:5rem;
}
`