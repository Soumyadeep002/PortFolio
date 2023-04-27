// import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Navbar from './components/navbar';
import Myabout from './components/Myabout';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import React, { useRef } from 'react';


function App() {
  
  const homeref= useRef(null)
  const aboutref= useRef(null)
  const proref=useRef(null)
  const conref=useRef(null)

  return (
    <div className=''>
      <Navbar homeref={homeref} proref={proref} aboutref={aboutref} conref={conref} />
      <Intro ref={homeref} />
      <Myabout ref={aboutref}></Myabout>
      <MyProjects ref={proref}></MyProjects>
      <Contact ref={conref}></Contact>

    </div>
  );
}

export default App;
// 