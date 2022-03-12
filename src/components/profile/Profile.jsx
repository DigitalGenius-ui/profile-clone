import React from 'react'
import styled from 'styled-components';

const Profile = () => {
  return (
    <Container>
        <Image src="https://res.cloudinary.com/ghazni/image/upload/v1646637426/m_jvhkfn.jpg"/>
        <Text>
            <h1>Milad Amiri</h1>
            <p>Front-End Web developer</p>
        </Text>
    </Container>
  )
}

export default Profile;

const Container = styled.div`
    background : linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1.6rem 0;
    position: relative;
`

const Image = styled.img`
    width: 6rem;
    border-radius: 50px;
`
const Text = styled.div`
    h1{
        font-size: 1.1rem;
        padding-top: 1rem;
    }
    p{
        font-size: 0.8rem;
        font-weight: 300;
        padding-top: 0.5rem;
        color: #8c8c8e;
    }
`
// const Dots = styled.div`
//     position: absolute;
//     top: 1rem;
//     right: 1rem;
//     cursor: pointer;
//     display: none;
// `