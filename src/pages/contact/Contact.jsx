import React from 'react'
import styled from 'styled-components';
import {FaUserAlt} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import Animation from '../../components/animation/Animation';

const Contact = () => {
  return (
    <Animation transition={1} delay={0.6}>
        <Container>
            <h2>Get in touch</h2>
            <form>
                <Input>
                    <div><FaUserAlt style={{fontSize:"0.7rem", opacity : "0.6"}}/></div>
                    <input type="text" placeholder='Name'/>
                </Input>
                <Input>
                    <div><MdAlternateEmail style={{fontSize:"0.7rem", opacity : "0.6"}}/></div>
                    <input type="text" placeholder='Email'/>
                </Input>
                <TextArea>
                    <div><HiOutlineMail style={{fontSize:"0.7rem", opacity : "0.6"}}/></div>
                    <textarea type="text" placeholder='Message' rows="7"/>
                </TextArea>
                <button>send message</button>
            </form>
        </Container>
    </Animation>
  )
}

export default Contact;

const Container = styled.div`
    padding: 1rem 2rem 1rem 2rem;
    @media(max-width : 970px){
        padding: 1rem;
    }
    h2{
        font-size : 1rem;
        padding : 1.5rem 0 ;
    }
    form{
        background: linear-gradient(159deg, 
        #2d2d3a 0%, #2b2b35 100%);
        padding: 2rem;
        @media(max-width : 970px){
        padding: 1rem;
        }
        button{
            background-color: skyblue;
            padding: 0.9rem 1.5rem;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            transition : all 300ms ease-in-out;
            font-size: 0.7rem;
            letter-spacing: 1px;
            font-weight: 500;
            :hover{
                transform: translateY(-2px);
            }
            @media(max-width : 415px){
                padding: 0.7rem 0.9rem;
            }
        }
    }
`
const Input = styled.div`
    display: flex;
    gap: 1rem;
    background: linear-gradient(159deg, #252532 0%, #23232d);
    margin-bottom: 2rem;
    height: 3rem;
    div{
        background-color: #20202a;
        padding: 1rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        width : 100%;
        padding-right: 1rem;
    }
`
const TextArea = styled(Input)`
    height: auto;
    textarea{
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        width : 100%;
        padding: 1rem 1rem 1rem 0;
    }
    div{
        align-items: flex-start;
    }
`