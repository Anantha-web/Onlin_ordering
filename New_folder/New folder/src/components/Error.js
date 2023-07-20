import React from 'react';
import styled from 'styled-components'
import Menu from './Menu';

const Error = () => {
  return (<>
      <Menu />      
      <Container>
          <img src="404.jpg" alt="" />
      </Container>
  </>
  );
};

export default Error;

const Container = styled.div`
width:100vw;
height:90vh;
object-fit:cover;
img{
    draggable:false;
    width:100%;
    height:100%;
}
`