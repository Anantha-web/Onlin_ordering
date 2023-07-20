import styled from "styled-components"
import Landing from "./components/Landing"
import CustomerLandingPage from "./components/CustomerLandingPage"
import {Route,Switch} from 'react-router-dom';
import LoginpageVendor from './components/LoginPageVendor.js'
import LoginpageCustomer from './components/LoginpageCustomer'
import RegisterPage from './components/RegisterPage'
import VendorLandingPage from './components/VendorLandingPage'
import Addons from "./components/Addons"
import Profile from "./components/Profile"
import RegisterPage2 from "./components/RegisterPageVendor";
import All from "./components/All";
import A from './components/DifferentShops/A'
import B from './components/DifferentShops/B'
import C from './components/DifferentShops/C'
import error from "./components/Error"
import CartPage from './components/Cart'
function App() {
  return (
     <Container>
       <Switch>
        <Route exact path='/'  component={Landing} ></Route>
        <Route eact path='/all' component={All}></Route>
        <Route eact path='/login1' component={LoginpageVendor}></Route>
        <Route eact path='/login2' component={LoginpageCustomer}></Route>
        <Route eact path='/register' component={RegisterPage}></Route>
        <Route exact path='/home1'  component={CustomerLandingPage} ></Route>
        <Route exact path='/home2'  component={VendorLandingPage} ></Route>
        <Route exact path='/addon'  component={Addons} ></Route>
        <Route exact path='/profile'  component={Profile} ></Route>
        <Route exact path='/registerasvendor'  component={RegisterPage2} ></Route>
        <Route exact path="/cart" component={CartPage} ></Route>
        <Route exact path='/A'  component={A} ></Route>
        <Route exact path='/B'  component={B} ></Route>
        <Route exact path='/C'  component={C} ></Route>
        <Route component={error}></Route>
        
       </Switch>
       
     </Container>
  );
}

export default App;

const Container = styled.div`
`