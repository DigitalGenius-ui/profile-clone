import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = ({bar, setBar}) => {
  return (
    <Container>
        <Bars bar={bar}>
            <Bar onClick={() => setBar(!bar)}>
                <Line bar={bar} ></Line>
            </Bar>
        </Bars>
        <MenuBar bar={bar}>
            <div>
                <Link to="/"><h4>Home</h4></Link>
            </div>
            <div>
                <Link to="profile"><h4>Portfolio</h4></Link>
            </div>
            <div><h4>Contact</h4></div>
        </MenuBar>
    </Container>
  )
}

export default Menu;

const Container = styled.div`
    a{
        text-decoration: none;
    }
`
const Bars = styled.div`
    width: ${props => props.bar ? "15rem" : "5rem"};
    transition: all 500ms ease-in-out;
    height: 5rem;
    background : linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    `
const Bar = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`
const Line = styled.div`
    width: 20px;
    height: 3.5px;
    background-color: ${props => props.bar ? "transparent" : "#8c8c8e"};
    border-radius: 50px;
    transition: all 500ms ease-in-out;
    :before,:after{
        content: '';
        position: absolute;
        width: 20px;
        height: 3px;            
        background-color: #8c8c8e;
        border-radius: 50px;
        transition: all 400ms ease-in-out;
    }
    :before{
        transform: ${props => props.bar ? "rotate(45deg)" :  "translateY(7px)"};
    }
    :after{
        transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-7px)"};
    }
`
const MenuBar = styled.div`
    padding: 4rem 2rem;
    div{
        h4{
        font-weight: 400;
        font-size: 0.8rem;
        margin : 0.5rem 0;
        color: #8c8c8e;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 100ms ease-in-out;
        :hover{
            color: #e9e9e9;
            font-weight: 400;
        }
    }
    transform: ${props => props.bar ? "translateX(0)" : "translateX(230px)"};
    :nth-child(1){
        transition: all 0.7s ease-in-out;
        }
        :nth-child(2){
            transition: all 0.8s ease-in-out;
        }
        :nth-child(3){
            transition: all 0.9s ease-in-out;
        }
        :nth-child(4){
            transition: all 1s ease-in-out;
        }
        :nth-child(5){
            transition: all 1.1s ease-in-out;
        }
    }
`