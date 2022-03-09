import React from 'react';
import Slider from 'react-slick/lib/slider';
import styled from 'styled-components';

const Recommendation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <Container>
        <h2>Recommendations</h2>
        <Slider {...settings}>
          <Slide>
            <Head>
              <Image src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg"/>
              <Text>
                <h1>Milad Amiri</h1>
                <p>Web Developer</p>
              </Text>
            </Head>
            <Body>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit officiis eum facilis 
                assumenda? Aliquid obcaecati, nemo dolorem veniam perferendis, 
                incidunt atque magni velit soluta numquam eligendi facere iure accusantium maxime eos laboriosam corrupti optio fuga expedita est sunt neque voluptatum.</p>
            </Body>
          </Slide>
          <Slide>
            <Head>
              <Image src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg"/>
              <Text>
                <h1>Milad Amiri</h1>
                <p>Web Developer</p>
              </Text>
            </Head>
            <Body>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit officiis eum facilis 
                assumenda? Aliquid obcaecati, nemo dolorem veniam perferendis, 
                incidunt atque magni velit soluta numquam eligendi facere iure accusantium maxime eos laboriosam corrupti optio fuga expedita est sunt neque voluptatum.</p>
            </Body>
          </Slide>
          <Slide>
            <Head>
              <Image src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg"/>
              <Text>
                <h1>Milad Amiri</h1>
                <p>Web Developer</p>
              </Text>
            </Head>
            <Body>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit officiis eum facilis 
                assumenda? Aliquid obcaecati, nemo dolorem veniam perferendis, 
                incidunt atque magni velit soluta numquam eligendi facere iure accusantium maxime eos laboriosam corrupti optio fuga expedita est sunt neque voluptatum.</p>
            </Body>
          </Slide>
        </Slider>
    </Container>
  )
}

export default Recommendation;

const Container = styled.div`
      width: 100%;
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }
  .slick-slide{
    margin-left: 0.5rem;
    height: 7rem;
  }
  .slick-dots{
    width: 8rem;
    margin: 0 0.5rem;
  }

  .slick-dots li button:before{
    content: "";
  }
  .slick-dots li button{
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    height: 3px;
    width: 8px;
    padding: 0.1rem;
    border-radius: 50px;
    background : linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    transition: all 500ms ease-in-out;
    margin-top: 1rem;
  }
  .slick-dots li.slick-active button{
    background: skyblue;
    width: 15px;
  }
  .slick-dots li{
    margin: 0 ;
  }
`
const Slide = styled.div`
  margin: 1rem;
  background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
  padding: 2rem;
`
const Head = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 4rem;
  border-radius: 50px;
  position: absolute;
  top: -3rem;
  right: 2rem;
`
const Text = styled.div`
  h1{
    font-size: 1rem;
  }
  p{
    font-size: 0.7rem;
    color: #8c8c8e;
    padding-top: 0.4rem;
  }
`
const Body = styled.div`
  p{
    font-size: 0.8rem;
    font-weight: 300;
    padding-top: 1rem;
    color: #8c8c8e;
  }
`