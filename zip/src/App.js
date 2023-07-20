import styled from "styled-components"
import Landing from "./components/Landing"
import CustomerLandingPage from "./components/CustomerLandingPage"
import {Route,Switch} from 'react-router-dom';
import LoginpageVendor from './components/LoginPageVendor.js'
import LoginpageCustomer from './components/LoginpageCustomer'
import RegisterPage from './components/RegisterPage'
import VendorLandingPage from './components/VendorLandingPage'
import Addons from "./components/Addons"

function App() {
  return (
     <Container>
       <Switch>
        <Route exact path='/'  component={Landing } ></Route>
        <Route eact path='/login1' component={LoginpageVendor}></Route>
        <Route eact path='/login2' component={LoginpageCustomer}></Route>
        <Route eact path='/register' component={RegisterPage}></Route>
        <Route exact path='/home1'  component={CustomerLandingPage} ></Route>
        <Route exact path='/home2'  component={VendorLandingPage} ></Route>
        <Route exact path='/addon'  component={Addons} ></Route>
        
       </Switch>
       
     </Container>
  );
}

export default App;

const Container = styled.div`
`