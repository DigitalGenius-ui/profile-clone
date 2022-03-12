import React from 'react';
import styled from 'styled-components';
import { service } from '../../Data/Data';
import {IoIosArrowForward} from 'react-icons/io';
import Animation from '../animation/Animation';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
  return (
      <Container>
        <Animation transition={1.3} delay={0.5}>
            <h2>My Services</h2>
            <Service>
                {service.map((item,i) => (
                    <Box key={i}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <div onClick={() => navigate("/contact")}>order now <IoIosArrowForward className='icon'/></div>
                    </Box>
                ))}
            </Service>
        </Animation>
        </Container>
  )
}

export default Services

const Container = styled.div`
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }
`
const Service = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    `
const Box = styled.div`
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    padding: 1rem;
    position: relative;
    padding-bottom: 2.4rem;
    h1{
        font-size: 0.9rem;
        padding-bottom: 1rem;
        font-weight: 500;
    }
    p{
        font-size: 0.8rem;
        font-weight: 300;
        color: #8c8c8e;
        line-height: 1.3rem;
    }
    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
        text-transform: uppercase;
        position: absolute;
        bottom: 1rem;
        font-size: 0.7rem;
        color: skyblue;
        cursor: pointer;
        letter-spacing: 0.9px;
        .icon{
            transition: all 400ms ease-in-out;
        }
        :hover .icon{
            transform: translateX(5px);
        }
    }
`