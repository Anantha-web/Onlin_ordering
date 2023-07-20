import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {userInfo} from '../features/userSlice'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector(userInfo)
    
    // let email=user.password;
    // let name=user.name;
    
    const [dis,setDis]=useState('inline-block')
    const [icon,setIcon]=useState('eye')
    const show = ()=>{
        if(dis=='none'){
            setDis('inline-block');
            setIcon('eye-slash');
        }
        else if(dis=='inline-block'){
            setDis('none');
            setIcon('eye');
        }
    }
   
  return (
      <Container>
          <Head>
              <span>Profile </span> 
              
          </Head>
          <UserInfo>
              <Card>
                <Img>
                <img src={localStorage.getItem("photo")} alt="" /></Img>
                <Content>

              <div className="name">Name : {localStorage.getItem("name")}</div>
              <div className="name">Email : <span style={{display:`${dis}`}}>{localStorage.getItem("email")}</span> 
              {/* <i class={`fas fa-${icon}`} onClick={show}></i> */}
               </div>
              <div className="name">Phone number : <span style={{display:`${dis}`}}>{localStorage.getItem("phone")}</span> 
              {/* <i class={`fas fa-${icon}`} onClick={show}></i> */}
               </div>
              <div className="name">Account-Created-on : <span style={{display:`${dis}`}}>{localStorage.getItem("AccountCreation")}</span> 
              {/* <i class={`fas fa-${icon}`} onClick={show}></i> */}
               </div>
                </Content>
              </Card>
              
          </UserInfo>
          <GoBack>
              <div> <Link to="/home1"><i class="fas fa-home"></i>Home</Link> </div>
          </GoBack>
          <Logout>
              <Link to="/"><button>Logout</button></Link>
          </Logout>
      </Container>
  );
};

export default Profile;

const Content=styled.div`

display:flex;
justify-content:center;
flex-direction:column;
`
const Img=styled.div`
width:30%;
border:2px soild black; 
display:flex;
justify-content:center;
align-items:center;
padding:8px;
object-fit:contain;
img{
    // width:100%;
    // height:100%;
    border-radius:8px;

}
`
const Card=styled.div`
display:flex;
border:1px solid black;
box-shadow:3px 3px 6px gray;
width:60%;
height:60%;
gap:2rem;
border-radius:8px;
`

const UserInfo=styled.div`
padding-top:2rem;
height:40vh;
font-size:1.3rem;
display:flex;
width:100%;
justify-content:center;
align-items:center;
font-family: 'Roboto Condensed', sans-serif;
word-spacing:0.3rem;
font-weight:bold;

div{
    i{
        cursor:pointer;
    }
}
`
const Container = styled.div`
position:relative;
width:100%;
height:100%;
padding:5rem;
margin-right:2rem;


`
const Head = styled.div`
border-bottom:2px solid black;
span{

    font-size:5rem;
}`

const GoBack = styled.div`
font-size:16px;
position:absolute;
top:9rem;
right:20rem;
a{
    text-decoration:none;
    font-size:25px;
    color:green;
}
`
const Logout = styled.div`

font-size:16px;
button{
    width:5rem;
    height:3rem;
    background:transparent;
    border:1px solid black;
    outline:none;
    border-radius:4px;
    transition:all 0.2s ;
    cursor:pointer;
    a{
        color:black;
        text-decoration:none;

    }
    &:hover{
        background:red;
        a{
            color:white;
        }
    }
}
`