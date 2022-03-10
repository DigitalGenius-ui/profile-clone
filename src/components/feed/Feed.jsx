import React from 'react'
import styled from 'styled-components';
import About from './About';
import Banner from './Banner';
import Price from './Price';
// import Recommendation from './Recommendation';
import Services from './Services';

const Feed = () => {
  return (
    <Container>
      <Banner/>
      <About/>
      <Services/>
      <Price/>
      {/* <Recommendation/> */}
    </Container>
  )
}

export default Feed;

const Container = styled.div`
  position: relative;
  padding : 2rem 2rem 0 2rem ;
`