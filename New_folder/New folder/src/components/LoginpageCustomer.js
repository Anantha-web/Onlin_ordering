import styled from'styled-components'
import {useState , useRef} from 'react'
import {useHistory } from 'react-router-dom';
import { addUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
 import {auth, signInWithGoogle} from '../firebase'
//  import {signInWithEmailAndPassword} from 'firebase/auth';

export const LoginpageCustomer=()=> {
  const history = useHistory();
    const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
 
  const handleSubmit = (e)=>{
    // e.preventDefault();
    if(name == "" || pass==""){
      alert('Enter a Username/Password')
  }else{
    history.push("/home1")}
    dispatch(addUser({
      name:name,
      password:pass
    }))
   
  }
  const SignInHandler = ()=>{
     signInWithGoogle();

       history.push("./home1")
     
 
 
  }
 
  
  
  return (
    <Container>
    <Box>
      <form action="">

      
          <Login>
              <h1>Login </h1>
              <br />
          </Login>

          <Fields>
            <label htmlFor="name" name="name">Email :</label>
              <input type="email" id="name" onChange={(es)=>{setName(es.target.value)}} />
          </Fields>
          <Fields>
            <label htmlFor="password" name="password">Password :</label>
              <input type="password"  id="password" onChange={(e)=>{setPass(e.target.value)}} />
          </Fields>
          <LoginBtn onClick={()=>history.push('./home1')}>
              <button onClick={handleSubmit}>Login</button>
          </LoginBtn>
          <LoginWithGoogle 
          // onClick={()=>history.push('./home1')}
          >
              <button onClick={SignInHandler}><i className="fab fa-google"></i>Google</button>
          </LoginWithGoogle>
          <SwitchToRegister>
              <p>New User? <a href="/register">Register now</a></p>
          </SwitchToRegister>
          </form>
    </Box>
</Container>);
}

export default LoginpageCustomer;
const LoginWithGoogle = styled.div`
margin-top:1rem;
display:flex;
justify-content:center;
button{
  height:5vh;
  width:60%;
  display:flex;
  justify-content:center;align-items:center;
  gap:1rem;
  border:1px solid gray;
  border-radius:1rem;
  background:none;
  color:white;
  cursor:pointer;
  background:#4285F4;
  box-shadow:1px 0px 4px gray;
  transition:all 0.3s ease-in-out;

  &:hover{
      background-color:blue;
      color:white;
      box-shadow:1px 2px 4px gray;

      
  }
}`
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
margin-bottom:2rem;`

const LoginBtn = styled.div`
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

const SwitchToRegister = styled.div`
position:absolute;
bottom:0;
left:8rem;
`