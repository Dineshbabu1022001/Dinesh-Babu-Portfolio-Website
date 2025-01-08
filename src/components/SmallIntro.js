import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SmallIntro = () => {
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  return (
    <div data-aos={isDesktop ? "fade-right" : undefined}
      data-aos-anchor-placement="top-center"
      data-aos-duration="1500"
      className='smallintro t'>
      <div className='small'>
        To Empower my technical proficiency and problem-solving skills, acquired through my MCA degree, to
        contribute effectively to a dynamic Information Technology environment.I am ultimately aiming for a
       leadership role in the field of Information Technology. 
      </div>
    </div>
  );
};
