import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../Data/Data';
import { motion } from 'framer-motion';
import Products from './Products';
import Animation from '../../components/animation/Animation';

const names = ['all', ...new Set(projects.map((item) => item.category))];
const Portfolio = () => {
  const [items, setItems] = useState(projects);
  const [categories] = useState(names);

  const filterItem =(cat) => {
    const newFilter = projects.filter((item) => item.category === cat);
    if(cat === 'all'){
      setItems(projects)
      return;
    }
    setItems(newFilter);
  }
  return (
    <Container>
      <Animation transition={1} delay={0.6}>
      <Buttons >
        {categories.map((item, i) => (
          <Filter key={i} onClick={() => filterItem(item)}>
            {item}
          </Filter>
        ))}
      </Buttons>
          <Contents>
            <motion.div layout className='contents'>
              {items.map((item) => (
                  <Products item={item} key={item.id}/>
              ))}
            </motion.div>
          </Contents>
      </Animation>
    </Container>
  )
}

export default Portfolio;

const Container = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  @media(max-width : 970px){
        padding: 1rem;
    }
`
const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
`
const Filter = styled.div`
  text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 1px;
    cursor: pointer;
    color: #8c8c8e;
    transition: all 400ms ease-in-out;
    :hover{
      color: white;
    }
`
const Contents = styled.div`
  .contents{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }
`