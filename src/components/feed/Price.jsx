import React from 'react';
import styled from 'styled-components';
import {TiTick} from 'react-icons/ti';
import {IoIosArrowForward} from 'react-icons/io';
import CloseIcon from '@mui/icons-material/Close';
import Animation from '../animation/Animation';
import { useNavigate } from 'react-router-dom';

const Price = () => {
    const navigate = useNavigate();
  return (
    <Container>
        <h2>Price Plans</h2>
        <Carts>
            <Animation transition={1} delay={0.6}>
                <Cart>
                    <Head>
                        <h1>basic</h1>
                        <h2><span>$</span>50</h2>
                    </Head>
                    <Body>
                        <h1><TiTick style={{color : "skyblue"}}/>Landing Page</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>Personal Portfolio</h1>
                        <h1 className='not'><CloseIcon className='icon'/>E-Commerce Website</h1>
                        <h1 className='not'><CloseIcon className='icon'/>SEO Analyses</h1>
                        <h1 className='not'><CloseIcon className='icon'/>UX/UI Convert</h1>
                        <h1><TiTick style={{color : "skyblue"}} />6 Months Free Service</h1>
                    </Body>
                    <Foot>
                    <div onClick={() => navigate("/contact")}>order now <IoIosArrowForward className='icon'/></div>
                    </Foot>
                </Cart>
            </Animation>
            <Animation transition={1} delay={0.7}>
                <Cart>
                    <Head>
                        <h1>Standard</h1>
                        <h2><span>$</span>75</h2>
                    </Head>
                    <Body>
                        <h1><TiTick style={{color : "skyblue"}}/>Landing Page</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>Personal Portfolio</h1>
                        <h1 className='not'><CloseIcon className='icon'/>E-Commerce Website</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>SEO Analyses</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>UX/UI Convert</h1>
                        <h1><TiTick style={{color : "skyblue"}} />1 Year Free Service</h1>
                    </Body>
                    <Foot>
                    <div onClick={() => navigate("/contact")}>order now <IoIosArrowForward className='icon'/></div>
                    </Foot>
                </Cart>
            </Animation>
            <Animation transition={1} delay={0.8}>
                <Cart>
                    <Head>
                        <h1>Premium</h1>
                        <h2><span>$</span>100</h2>
                    </Head>
                    <Body>
                    <h1><TiTick style={{color : "skyblue"}}/>Landing Page</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>Personal Portfolio</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>E-Commerce Website</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>SEO Analyses</h1>
                        <h1><TiTick style={{color : "skyblue"}}/>UX/UI Convert</h1>
                        <h1><TiTick style={{color : "skyblue"}} />1 Year Free Service</h1>
                    </Body>
                    <Foot>
                    <div onClick={() => navigate("/contact")}>order now <IoIosArrowForward className='icon'/></div>
                    </Foot>
                </Cart>
            </Animation>
        </Carts>
    </Container>
  )
}

export default Price;

const Container = styled.div`
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }
`
const Carts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1rem;
`
const Cart = styled.div`
    background: linear-gradient(159deg, 
    #2d2d3a 0%, #2b2b35 100%);
    padding: 2rem ;
`
const Head = styled.div`
    text-align: center;
    h1{
        text-transform: capitalize;
        font-size: 1rem;
    }
    h2{
        font-size: 2rem;
        color: skyblue;
        span{
            font-size: 0.9rem;
            font-weight: 300;
        }
    }
`
const Body  = styled.div`
    padding-bottom: 1rem;
    h1{
        font-size: 0.9rem;
        color: #8c8c8e;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        line-height: 1.5rem;
        font-weight: 300;
    }
    .not{
        opacity: 0.4;
    }
    .icon{
        font-size: 0.8rem;
        color: skyblue;
    }
`
const Foot  = styled.div`
    div{
        display: flex;
        align-items: center;
        gap: 0.2rem;
        text-transform: uppercase;
        font-size: 0.7rem;
        color: skyblue;
        cursor: pointer;
        letter-spacing: 0.9px;
        width: 6rem;
        .icon{
            transition: all 400ms ease-in-out;
        }
        :hover .icon{
            transform: translateX(5px);
        }
    }
`