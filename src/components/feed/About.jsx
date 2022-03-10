import React from 'react'
import styled from 'styled-components';
import Animation from '../animation/Animation';

const About = () => {
  return (
    <Animation transition={1} delay={0.5}>
        <Container>
            <h2>About me</h2>
            <p>From the moment I produced <span>"Hello World"</span> in the console of my application, I knew I was hooked into the 
            world of Web Development. But Web Development has never been <span>"just a job"</span> for me, its offer an engaging
            challenge to continually learn and improve my skills in creating high-quality Webpages.<br></br> What started with a
            simple <span>"Hello World"</span> has become a full-fledge passion that only gets more exciting as the year go by. 
            </p>
        </Container>
    </Animation>
  )
}

export default About;

const Container = styled.div`
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }
    p{
        padding: 1rem;
        color: #8c8c8e;
        font-size: 0.9rem;
        line-height: 1.3rem;
        background: linear-gradient(159deg, 
        #2d2d3a 0%, #2b2b35 100%);
        span{
            color: skyblue;
        }
    }
`