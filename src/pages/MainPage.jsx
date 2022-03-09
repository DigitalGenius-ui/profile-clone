import React, { useState } from 'react'
import styled from 'styled-components';
import Feed from '../components/feed/Feed';
import Menu from '../components/Menu/Menu';
import Profile from '../components/profile/Profile';
import Skills from '../components/profile/Skills';

const MainPage = () => {
    const [bar, setBar] = useState(false);
  return (
    <Container>
        <ProfileBar>
            <Profile/>
            <Skill>
                <Skills/>
            </Skill>
        </ProfileBar>
        <FeedBar>
            <Feed />
        </FeedBar>
        <MenuBar bar={bar}>
            <Menu bar={bar} setBar={setBar}/>
        </MenuBar>
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
    /* border: 1px solid #fff; */
    ::-webkit-scrollbar{
        display: none;
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
`