import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'
import Animation from '../animation/Animation';

const Feed = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Animation transition ={1} delay= {0.5}>
          <Banner>
            <Texts>
              <h1>Discover my Amazing Art Space!</h1>
              <div> 
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
              <button onClick={() => navigate("/contact")}>explore now</button>
            </Texts>
            <Image style={{opacity : "0.8"}} src="https://res.cloudinary.com/ghazni/image/upload/v1646637435/milad_z34z7s.png"/>
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
  background : linear-gradient(159deg, rgba(37, 37, 50, 0.596) 0%, rgba(35, 35, 45, 0.98) 100%), url("https://res.cloudinary.com/ghazni/image/upload/v1646637427/ban_ajuzqa.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 19rem;
  position: relative;
`
const Texts = styled.div`
  padding: 3rem;
  @media(max-width : 970px){
    text-align: center;
  }
  @media(max-width : 640px){
      padding: 3rem 2rem;
    }
  h1{
    font-size: 3rem;
    width: 29rem;
    font-family: 'Passion One', cursive;
    letter-spacing: 0.1rem;
    font-weight: 500;
    @media(max-width : 1150px){
      font-size: 2.5rem;
    }
    @media(max-width : 970px){
      width: 28rem;
      margin: 0 auto;
      font-size: 3rem;
    }
    @media(max-width : 640px){
      width: 100%;
      font-size: 3rem;
    }
    @media(max-width : 570px){
      font-size: 2.5rem;
    }
  }
  div{
    padding: 0.4rem 0;
    display : flex;
    align-items : center;
    font-size : 1rem;
    gap : 0.2rem;
    @media(max-width : 1110px){
      font-size: 0.9rem;
    }
    @media(max-width : 970px){
      justify-content: center;
      font-size: 1rem;
    }
    @media(max-width : 570px){
      font-size: 0.8rem;
    }
    @media(max-width : 375px){
      font-size: 0.6rem;
    }
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
    @media(max-width : 970px){
      margin-top: 1rem;
    }
    @media(max-width : 640px){
      padding: 0.7rem 1.5rem;
    }
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
  @media(max-width : 1088px){
    right: 1rem;
  }
  @media(max-width : 1050px){
    display: none;
  }
`