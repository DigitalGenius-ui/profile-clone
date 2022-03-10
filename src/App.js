import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';
import Loading from './components/progress/Loading';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false)
      setOpen(true);
    }, 4000);
  },[]);
  return (
    <ThemeProvider Theme={darkTheme}>
      <Container>
        {open && <MainPage/>}
        {loading && <Loading/>}
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  padding: 1rem;
`