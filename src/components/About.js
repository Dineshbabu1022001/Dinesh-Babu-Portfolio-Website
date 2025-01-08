import React, { useEffect } from "react";
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  const About = (props) => {
    const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

    useEffect(() => {
        if (isDesktop) {
            AOS.init();
        }
    }, [isDesktop]);


    return (
      <div className='hello'  >
        <div data-aos={isDesktop?"fade-left":undefined}
                          data-aos-duration="1500" className='about t' >
          <p className="about-year" style={{ margin:"0px 10px 0px 10px" ,color: "#74C0FC" ,paddingTop:"0"}}>{props.year}</p>
          <p className="about-dept" style={{margin:"0px 10px 0px 10px"  ,paddingTop:"0" }}>{props.dept} |  <span  className="about-clg">{props.school}</span></p>
          <p  className="about-desp"style={{margin:"0px 10px 0px 10px"  ,paddingTop:"0",}}> {props.description}</p>
          <p  className="about-score"style={{margin:"10px 10px 0px 10px" }}>Scored {props.Scored}</p>
        </div>
      </div>
    );
  };

  export default About;
