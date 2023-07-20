import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
function VendorLandingPage() {
  return(
  <Container>
      <Main>
          
      <Head>
          <Pending><NavLink to="/"> <span>Pending</span></NavLink> </Pending>
          <Completed><NavLink to="/CompletedOrder"><span>Completed</span></NavLink>  </Completed>
          <Deleted><NavLink to="/DeletedOrder"><span>Deleted</span></NavLink>  </Deleted>
      </Head>
        <Table>
        <table >
            <tr>
            <th>Customer</th>
            <th>Item Ordered</th>
            <th>Price</th>
            <th>Status</th>
            </tr>
      
          <tr>

        <td>Name : xyz
            <br />
            Contact : 123456
            <br />
            Batch : UG
        </td>
        <td>2</td>
        <td>3</td>
        <td className="status">
            delivered
            <br />
            reject

        </td>
          </tr>
        </table>

      </Table>
      </Main>
  </Container>)
}

export default VendorLandingPage;

const Main = styled.div``
const Pending = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content:center;
`
const Completed = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content:center;
`
const Deleted = styled.div`
text-align:center;
display:flex;
align-items:center;
justify-content:center;
`
const Container = styled.div`
`
const Head = styled.div`  
background:orange; 
display:grid; 
height:3rem;
grid-template-columns:33% 33% 33%;
a{
    text-decoration:none;
}
`

const Table = styled.div`
margin-top:2rem;
width:100vw;
table , th , td {
    border:2px solid black;

} 
table{
    width:100%;
}
td{
    text-align:center;
}

`