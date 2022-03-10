import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/feed/Feed';
import Footer from '../components/feed/Footer';
import Logos from '../components/feed/Logos';
import Menu from '../components/Menu/Menu';
import Profile from '../components/profile/Profile';
import Skills from '../components/profile/Skills';
import Portfolio from './Portfolio';

const MainPage = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container>
        <BrowserRouter >
          <Container>
            <ProfileBar>
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
                  </Routes>
                <Logos/>
                <Footer/>
              </FeedBar>
              <MenuBar bar={bar}>
                  <Menu bar={bar} setBar={setBar}/>
            </MenuBar>
          </Container>
      </BrowserRouter>
    </Container>
  )
}

export default MainPage;

const Container = styled.div`
    display: flex;
    overflow: hidden;
`
const ProfileBar = styled.div`
    position: fixed;
    width: 19rem;
    bottom: 1rem;
    top: 1rem;
    background-color: #20202a;
    overflow: hidden;
`
const Skill = styled.div`
    position: absolute;
    overflow: scroll;
    top : 13rem;
    bottom: 0;
    left: 0;
    right: 0;
    ::-webkit-scrollbar {
        display: none;
    }
`
const FeedBar = styled.div`
    overflow: scroll;
    position: fixed;
    top : 1rem;
    right: 6rem;
    left: 20rem;
    bottom: 1rem;
    ::-webkit-scrollbar{
        display: none;
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
`
const MenuBar = styled.div`
    width: ${props => props.bar ? "15rem" : "5rem"};
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    top: 1rem;
    background-color: #20202a;
    transition: all 500ms ease-in-out;
`