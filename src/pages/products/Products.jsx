import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

const Products = ({item}) => {
  return (
    <motion.div layout>
      <Image src={item.image} />
        <Texts>
          <a href={item.html_link} target="_blank" rel="noreferrer"><h1>{item.text}</h1></a>
          <p>{item.disc}</p>
      </Texts>
    </motion.div>
  )
}

export default Products;

const Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  opacity: 0.7;
`
const Texts = styled.div`
  h1{
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.5rem 0;
    font-weight: 400;
  }
  a{
    text-decoration: none;
    color: white;
    :hover{
      color: orange;
    }
  }
  p{
    font-size: 0.8rem;
    font-weight: 300;
    color: #8c8c8e;
  }
`