import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import MainPage from './pages/MainPage';
import styled from 'styled-components';

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  return (
    <ThemeProvider darkTheme={darkTheme}>
      <Container>
        <MainPage/>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  padding: 1rem;
`
