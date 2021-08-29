import './App.css';
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import {Separator} from './components/Separator'

function App() {

   const App = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 12px; 
    margin: auto;
    @media only screen and (max-width: 1024px){
        width: 90%;
    }
    @media only screen and (max-width: 512px){
        width: 100%;
    }
    `
  
  return (
    <App className="App">
      <Header />
      <About id='about' />
      < Separator/>
      <Skills id='skills' />
      < Separator/>
      <Experience id='experience' />
      < Separator/>
      <Footer/>
    </App>
  );
}

export default App;
