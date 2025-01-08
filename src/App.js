import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import aboutData from './components/AboutData';
import About from './components/About';
import {SmallIntro} from './components/SmallIntro';
import { TechToolsContainer } from './components/TechToolsContainer';
import { Project } from './components/Project';
import { ToastContainer } from 'react-toastify';

import { Contact } from './components/Contact';
function App() {
   
 const aboutdata=aboutData.map(item=>(
    <About
    key={item.id}
    {...item}
    />
  )
  );
  


  return (
    <div className="App">
       <ToastContainer theme='dark' />
      <Navbar />
      <Home /> 
      <p  id="about" className='aboutme'>About  <span style={{color:"#74C0FC", }}>Me</span></p>
      
      <div className="About-details">
      <SmallIntro />
      
      <div className='about-content'>
      { aboutdata}
      </div>
      </div>
      <TechToolsContainer/>
      <Project/>
       <Contact/>
    </div>
  );
}

export default App;
