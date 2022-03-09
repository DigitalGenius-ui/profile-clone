import React from 'react'
import styled from 'styled-components';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Logos from './Logos';
import Price from './Price';
import Recommendation from './Recommendation';
import Services from './Services';

const Feed = () => {
  return (
    <Container>
      <BgImg></BgImg>
      <Banner/>
      <About/>
      <Services/>
      <Price/>
      <Recommendation/>
      <Logos/>
      <Footer/>
    </Container>
  )
}

export default Feed;

const Container = styled.div`
  position: relative;
  padding : 2rem 2rem 0 2rem ;
`
const BgImg = styled.div`
  background: linear-gradient(#191923ce, #191923), url("https://res.cloudinary.com/ghazni/image/upload/v1646637427/ban_ajuzqa.jpg");
  height: 19rem;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top : 1rem;
  left : 20rem;
  right : 6rem;
  z-index: -1;
`