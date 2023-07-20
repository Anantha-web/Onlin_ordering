import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

export const EntrancePage=()=> {
    const history = useHistory();
  return <Container>
          
      <Box>

            <Welcome>
                <h1>Welcome to the Canteen</h1>
                <br />
            </Welcome>

            <Enter>
                <h2>Enter as : </h2>
            </Enter>
            
            
            <Btn1>
                <button onClick={()=>history.push("/login1")
}>Vendor </button>
            </Btn1>

            <Btn1>
                
                <button onClick={()=> history.push("/login2")}>Customer</button>
            </Btn1>
      </Box>
  </Container>;
}

export default EntrancePage;

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
height:50%;
border:2px solid black;
border-radius:4px;
box-shadow:2px 4px 8px black;
`


const Enter = styled.div`
display:flex;
justify-content:center;
`


const Welcome = styled.div`
display:flex;
justify-content:center;`

const Btn1 = styled.div`
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

    NavLink{
        text-decoration:none;
    }

    &:hover{
        background-color:gray;
        color:white;
        box-shadow:1px 2px 4px gray;

        
    }
}
`