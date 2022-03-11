import './App.css';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import React, { useEffect, useState } from 'react';
import Loading from './components/progress/Loading';

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false)
      setOpen(true);
    }, 2000);
  },[]);
  return (
      <Container>
        {open && <MainPage/>}
        {loading && <Loading/>}
      </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 1rem;
`