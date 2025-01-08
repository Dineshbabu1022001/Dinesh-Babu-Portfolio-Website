import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProjectWrapper = (props) => {
    const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens
    const iAnchor=window.innerWidth >= 1000;
    useEffect(() => {
        if (isDesktop) {
            AOS.init();
        }
    }, [isDesktop]);

    const Click = (url) => {
        window.location.href = url;
    };

    return (
        <div className="project-content">
            {props.count === "0" && iAnchor ? (
                <>
                     <div className="design">
                        <div 
                            data-aos={isDesktop ? "fade-right" : undefined} 
                            data-aos-anchor-placement={iAnchor ? "top-center": undefined}  
                            data-aos-duration="1500"
                            data-aos-offset="100"
                            style={{
                                background: 'linear-gradient(0deg, rgba(244,2,2,1) 0%, rgba(255,190,190,1) 100%)',
                            }}
                            className="straightline"></div>
                        <img 
                            data-aos={isDesktop ? "fade-down" : undefined} 
                            data-aos-anchor-placement={iAnchor ? "top-center": undefined} 
                            data-aos-duration="1200" 
                            className="project-img" 
                            src={props.img} 
                            alt="projectImage" />
                    </div>
                    <div 
                        data-aos={isDesktop ? "fade-left" : undefined} 
                        data-aos-duration="1500" 
                        className="proj">
                        <p className="project-title">{props.projectHeading}</p>
                        <p className="project-description">{props.ProjDespriction}</p>
                        <span className="proj-boxes">
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1100" 
                                className="box">{props.Year}</p>
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1400" 
                                className="box">{props.SoftUsed1}</p>
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1700" 
                                className="box">{props.SoftUsed2}</p>
                        </span>
                        <button 
                            onClick={() => Click(props.link)} 
                            data-aos={isDesktop ? "fade-up" : undefined} 
                            data-aos-duration="2000" 
                            className="view-button">
                            VIEW WORK <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div 
                        data-aos={isDesktop ? "fade-right" : undefined} 
                        data-aos-duration="1500" 
                        className="proj">
                        <p className="project-title">{props.projectHeading}</p>
                        <p className="project-description">{props.ProjDespriction}</p>
                        <span className="proj-boxes">
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1100" 
                                className="box">{props.Year}</p>
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1400" 
                                className="box">{props.SoftUsed1}</p>
                            <p 
                                data-aos={isDesktop ? "fade-up" : undefined} 
                                data-aos-duration="1700" 
                                className="box">{props.SoftUsed2}</p>
                        </span>
                        <button  
                            onClick={() => Click(props.link)} 
                            data-aos={isDesktop ? "fade-up" : undefined} 
                            data-aos-duration="2000" 
                            className="view-button">
                            VIEW WORK <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="design">
                        <img 
                            data-aos={isDesktop ? "fade-up" : undefined} 
                            data-aos-anchor-placement={iAnchor ? "top-center": undefined} 
                            data-aos-duration="1200" 
                            className="project-img" 
                            src={props.img} 
                            alt="projectImage" />
                        <div 
                            data-aos={isDesktop ? "fade-left" : undefined} 
                            data-aos-anchor-placement={iAnchor ? "top-center": undefined} 
                            data-aos-duration="1500"
                            className="straightline"
                            style={{
                                background: 'linear-gradient(0deg, rgba(2,104,244,1) 0%, rgba(170,226,255,1) 100%)',
                            }}
                        ></div>
                    </div>
                </>
            )}
        </div>
    );
};