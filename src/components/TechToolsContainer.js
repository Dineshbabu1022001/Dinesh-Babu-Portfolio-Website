import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechnologyData from './TechnologyData';
import ToolsData from './ToolsData';
import { Wrapper } from './Wrapper';

export const TechToolsContainer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const techdata = TechnologyData.map(item => (
    <Wrapper 
      key={item.id}
      {...item}
    />
  ));

  const toolsdata = ToolsData.map(item => (
    <Wrapper 
      key={item.id}
      {...item}
    />
  ));

  return (
    <div id="Tech">
      <div className='wrap1'>
        <p className='aboutme'>
          <span style={{color:"#74C0FC"}}>Technologies</span> worked with
        </p>
        <div className='Wrapper-design'>
          {techdata}
        </div>
      </div>
      <div className='wrap2'>
        <p className='aboutme'>
          <span style={{color:"#74C0FC "}}>Tools</span> worked with
        </p>
        <div className='Wrapper-design'>
          {toolsdata}
        </div>
      </div>
    </div>
  );
};
