import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
        <p>&copy; Copyrighted By Milad Amiri 2022</p>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    padding: 1rem ;
    margin: 0 2rem;
    @media(max-width : 970px){
      margin: 0 1rem;
    }
    text-align: center;
    font-size: 0.7rem;
    margin-top: 2rem;
    font-weight: 300;
    color: #8c8c8e;
`