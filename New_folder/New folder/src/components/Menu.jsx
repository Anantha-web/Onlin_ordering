import React ,{useState , useContext} from 'react';
import styled from'styled-components'
import { Switch , Route,NavLink} from 'react-router-dom'
import userImg from './user.png'
import {Link} from 'react-router-dom'
import {userInfo} from '../features/userSlice'
import { useSelector } from 'react-redux';
import { SearchItem } from '../features/SearchSlice';
import { useDispatch } from 'react-redux';


function Menu() {
	const [vale , setval] = useState('');

const dispatch = useDispatch();
const user = useSelector(userInfo)
const [toggle , settoggle] = useState("none");
const  toggling = ()=>{
  if(toggle == "none"){
    settoggle('flex')
  }
  else if(toggle =="flex"){
    settoggle('none')
  }
  
}


const handleSubmit = ()=>{
  // e.preventDefault();
  if(vale == "" ){
    alert('Enter something to Search')
}else{
  dispatch(SearchItem({
    itemName:vale,
    
  })
  );
 
}}
  return(<>
    <Nav>
    <Logo>
      <img src="./vada-pav.png" alt="" />
    </Logo>
    <NavBar>
      <Title>
        College Canteen
        <input type="text" placeholder="Search fo items" onChange={(event) =>{setval(event.target.value)}} />
        <button onClick={()=>handleSubmit()}>Search</button>


      </Title>
        <NavItems>
          <NavLink exact activeClassName='active_class' to="/home1">  Shops</NavLink>
          <NavLink exact activeClassName='active_class' to="/all">  All</NavLink>
          <NavLink exact activeClassName='active_class' to="/addon">  Addons</NavLink>
          <NavLink exact activeClassName='active_class' to="/cart">  Cart</NavLink>
        </NavItems>
        <Img>
        <ImgCont>
        <img src={localStorage.getItem("photo")} alt="" onClick={toggling}/>
  
        </ImgCont>
        
        <span>{localStorage.getItem("name")}</span>
        </Img>
        <div className="box" style={{display:`${toggle}`}}>
          <Link to="/profile">Profile</Link>
          <hr />
        <Link to="/login2" className='logout'>Logout</Link>

        </div>
    </NavBar>
  </Nav>
  </>
  )
}

export default Menu;
const ImgCont = styled.div`
display:flex;
flex-direction:column;
img{
  border-radius:50%;
}


`

const Img = styled.div`
height:100%;
object-fit: contain;
display:flex;
justify-contain:center;
align-items:center;
img{
  width:32px;
  height:32px;
  cursor:pointer;
}
span{
  font-size:1.1rem;
}
div{
  display:flex;
  flex-direction:column;
  // a{
  //   text-decoration:none;
  //   color:red;
  // }
}

`

const Nav = styled.div`
position:relative;
display:flex;
height:10%;
width:100%;
border-bottom:2px solid black;
.box{
  position:absolute;
  width:5rem;
  height:4rem;
  display:flex;
  // gap:0.6rem;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  right:7rem;
  top:2.4rem;
  border:none;
  // border:2px solid black;
  box-shadow:1px 3px 6px black;
  border-radius:4px;
  a{
    font-size:16px;
    text-decoration:none;
    
  }
  .logout{
    color:red;
    
  }
}

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