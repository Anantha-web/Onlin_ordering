import styled from'styled-components'

import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';

export const RegisterPage=()=> {
  const history  = useHistory();
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  return (
    <Container>
    <Box>

          <Login>
              <h1>Register </h1>
              <br />
          </Login>

          <Fields>
            <label htmlFor="name" name="name">Name :</label>
              <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
          </Fields>
          <Fields>
            <label htmlFor="number" name="number">Mobile No. :</label>
              <input type="number" id="number" onChange={(e)=>setNumber(e.target.value)}/>
          </Fields>
          <Fields>
            <label htmlFor="email" name="email">Email :</label>
              <input type='email' id="email" onChange={(e)=>setEmail(e.target.value)} />
          </Fields>
          <Fields>
            <label htmlFor="password" name="password">Set Password :</label>
              <input type="password" id="password" onChange={(e)=>setPass(e.target.value)}/>
          </Fields>
          <RegisterBtn>
              <button onClick={()=>{
                if(name==="" || pass==="" || email==="" || number==="" ){
                  alert("Fill in all the details...")
                }else{

                  history.push("/login2")}
                }
}>Register</button>
          </RegisterBtn>
          <SwitchToLogin>
              <p>Already a User? <a href="/login2">Login now</a></p>
          </SwitchToLogin>
    </Box>
</Container>);
}

export default RegisterPage;

const Container = styled.div`
font-family: monospace;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;


`

const Box = styled.div`
display:flex;
flex-direction:column;
width:30%;
height:60%;
border:2px solid black;
border-radius:4px;
box-shadow:2px 4px 8px black;
position:relative;
`


const Fields = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:60%;
margin-left:5rem;
margin-top:1rem;
`


const Login = styled.div`
display:flex;
justify-content:center;
`
const RegisterBtn = styled.div`
margin-top:3rem;
display:flex;
justify-content:center;
button{
  height:5vh;
  width:60%;
  border:1px solid gray;
  border-radius:1rem;
  background:none;
  cursor:pointer;
  box-shadow:1px 0px 4px gray;
  transition:all 0.3s ease-in-out;

  &:hover{
      background-color:gray;
      color:white;
      box-shadow:1px 2px 4px gray;

      
  }
}
`

const SwitchToLogin = styled.div`
position:absolute;
bottom:0;
left:8rem;
`