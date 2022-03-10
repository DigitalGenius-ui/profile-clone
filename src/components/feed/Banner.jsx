import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'
import Animation from '../animation/Animation';

const Feed = () => {
  return (
    <Container>
        <Animation transition ={0.5} delay= {0.5}>
          <Banner>
            <Texts>
              <h1>Discover my Amazing <br></br> Art Space!</h1>
              <div style={{display : "flex", alignItems : "center", fontSize : "1rem", gap : "0.2rem"}}> 
                &lt;<span className='code'>code</span>&gt; I built
                <Typewriter
                  options={{
                  strings: ["Interactive Web Pages", "Responsive Web Pages"],
                  autoStart: true,
                  loop: true,
                  changeDeleteSpeed : 10
                  }}
                />
                &lt;<span className='code'>code</span>&gt;
              </div>
              <button>explore now</button>
            </Texts>
            <Image src="https://res.cloudinary.com/ghazni/image/upload/v1646637435/milad_z34z7s.png"/>
          </Banner>
        </Animation>
    </Container>
  )
}

export default Feed;

const Container = styled.div`
  position: relative;
`
const Banner = styled.div`
  background: linear-gradient(#3a3232d1, #4b4545a7), url("https://res.cloudinary.com/ghazni/image/upload/v1646637427/ban_ajuzqa.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 19rem;
  position: relative;
`
const Texts = styled.div`
  padding: 3rem;
  h1{
    font-size: 3rem;
    font-family: 'Passion One', cursive;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  div{
    padding: 1rem 0;
    .code{
      color: skyblue;
      font-weight: 500;
    }
  }
  button{
    margin-top: 0.5rem;
    padding: 0.9rem 2rem;
    background-color:skyblue;
    border: none;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 500ms ease-in-out;
    :hover{
      transform: translateY(-3px);
    }
  }
`
const Image = styled.img`
  width: 12.4rem;
  position: absolute;
  bottom: 0;
  right: 3rem;
`