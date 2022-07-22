import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/feed/Feed';
import Footer from '../components/feed/Footer';
import Logos from '../components/feed/Logos';
import Menu from '../components/Menu/Menu';
import Profile from '../components/profile/Profile';
import Skills from '../components/profile/Skills';
import Contact from './contact/Contact';
import Portfolio from './products/Portfolio';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProfileState } from '../context/Context';

const MainPage = () => {
    const {bar, setBar, prof ,setProf} = ProfileState();
    const profileMove = () => {
      setProf(!prof);
      setBar(false)
    }
    const barMove = () => {
      setBar(!bar)
      setProf(false);
    }
  return (
    <BrowserRouter >
          <MenuBg>
            <Dots prof={prof}>
              <MoreVertIcon 
              onClick={profileMove}
              style={{opacity : "0.6"}}/>
            </Dots>
            <Bars bar={bar}>
              <Bar onClick={barMove}>
                <Line bar={bar}></Line>
              </Bar>
            </Bars>
          </MenuBg>
          <Container>
            <ProfileBar prof={prof}>
              <Profile/>
              <Skill>
                  <Skills/>
              </Skill>
            </ProfileBar>
              <FeedBar>
                <BgImg></BgImg>
                  <Routes>
                      <Route path='/' element={<Feed/>}/>
                      <Route path="/profile" element={<Portfolio/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                  </Routes>
                <Logos/>
                <Footer/>
              </FeedBar>
              <MenuBar bar={bar}>
                <Menu bar={bar} setBar={setBar}/>
            </MenuBar>
          </Container>
      </BrowserRouter>
  )
}

export default MainPage;

const Container = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
`
const ProfileBar = styled.div`
    position: fixed;
    width: 19rem;
    bottom: 1rem;
    top: 1rem;
    background-color: #20202a;
    overflow: hidden;
    z-index: 100;
    @media(max-width : 970px){
      transform: ${props => props.prof ? "translateX(-1rem)" : "translateX(-21rem)"};
      transition: all 500ms ease-in-out;
      bottom: 1rem;
      top: 5rem;
      width: 20rem;
    }
`
const Skill = styled.div`
    position: absolute;
    overflow: scroll;
    top : 13rem;
    bottom: 0;
    left: 0;
    right: 0;
`
const FeedBar = styled.div`
    overflow-y: scroll;
    position: fixed;
    top : 1rem;
    right: 6rem;
    left: 20rem;
    bottom: 1rem;
    z-index: -1;
    transition: all 500ms ease-in-out;
    @media(max-width : 970px){
      right: 0;
      left: 0;
      top : 4rem;
    }
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
  @media(max-width : 970px){
    right: 0;
    left: 0;
    top : 0;
  }
`
const MenuBar = styled.div`
    width: ${props => props.bar ? "15rem" : "5rem"};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    top: 1rem;
    background-color: #20202a;
    transition: all 500ms ease-in-out;
    @media(max-width : 970px){
      right: ${props => props.bar ? 0 : "-5rem"};
      width: ${props => props.bar ? "15rem" : "5rem"};
    }
`
const MenuBg = styled.div`
  position: fixed;
  right: 1rem;
  z-index: 10000;
  @media(max-width : 970px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    right: 0;
    top: 0;
    background : linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
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
const Dots = styled.div`
    cursor: pointer;
    display: none;
    @media(max-width : 970px){
      display: inline;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items:center;
      justify-content: center;
      transition: all 500ms ease-in-out;
      transform: ${props => props.prof ? "translateX(13rem)" : null};
    }
`
