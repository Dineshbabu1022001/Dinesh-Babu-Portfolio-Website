import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Wrapper = (props) => {
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  return (
    <div data-aos= {isDesktop?"fade-down":undefined}  data-aos-duration={props.duration} className='container1'>
      <img src={props.img} alt={props.name} className='WrapperImage' />
      <p className='txt'>{props.name}</p>
    </div>
  )
}
