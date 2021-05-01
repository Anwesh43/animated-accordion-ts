import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion'
const texts = [
  {
    title: 'Arsenal',
    subTitle: 'Arsenal Football Club is a professional football club based in Islington, London, England that plays in the Premier League, the top flight of English football.'
  },
  {
    title: 'Manchester United',
    subTitle: 'Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. '
  },
  {
    title: 'Manchester City',
    subTitle: 'Manchester City Football Club is an English football club based in Manchester that competes in the Premier League, the top flight of English football.'
  }
]
function App() {
  return (
    <div className="App">
      <Accordion texts = {texts}></Accordion>
    </div>
  );
}



export default App;
