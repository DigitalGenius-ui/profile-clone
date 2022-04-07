import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProfileState } from '../../context/Context';

const Menu = () => {
    const {bar, setBar, prof, setProf} = ProfileState();
    const navigate = useNavigate();
    const home = () => {
        setBar(false);
        navigate("/")
    }
    const profile = () => {
        setBar(false);
        navigate("/profile")
    }
    const contact = () => {
        setBar(false);
        navigate("/contact")
    }
    const deleteAll = () => {
      setBar(false);
      setProf(false);
    }
  return (
    <Container>
        <Bg bar={bar} prof={prof} onClick={deleteAll}></Bg>
        <MenuBar bar={bar}>
            <div onClick={home}>
                <h4>Home</h4>
            </div>
            <div onClick={profile}>
                <h4>Portfolio</h4>
            </div>
            <div onClick={contact}>
                <h4>Contact</h4>
            </div>
        </MenuBar>
    </Container>
  )
}

export default Menu;

const Container = styled.div`
        position: relative;
    a{
        text-decoration: none;
    }
`
const Bg = styled.div`
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    background-color: #1919237a;
    animation: animate 500ms ease-in-out;
    display: ${props => props.bar || props.prof ? "block" : "none"};
    z-index: -1;
`
const MenuBar = styled.div`
    padding: 8rem 2rem;
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
