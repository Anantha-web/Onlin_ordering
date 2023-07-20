import React from 'react';
import {LoginpageCustomer} from "./LoginpageCustomer"
import {LoginpageVendor} from "./LoginPageVendor"
import {EntrancePage} from "./EntrancePage"
import {RegisterPage} from "./RegisterPage"
import {Switch , Route} from "react-router-dom"
function Landing() {
  return <>
  <Switch>
    <Route exact path="/" component={EntrancePage} />
    <Route exact path="/login1"  component={LoginpageVendor} /> 
    <Route exact path="/login2" component={LoginpageCustomer } /> 

    <Route exact path="/register" component={RegisterPage } />  
   
      
  </Switch>
  </>;
}

export default Landing;
