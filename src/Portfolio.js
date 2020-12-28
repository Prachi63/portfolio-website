import React from 'react';
import './portfolio.css'; 
import {TopNav} from './TopNav.js';
import {SectionContainer} from './SectionContainer.js';
import Skills from './Skills.js';
import {About} from './About.js';
import Projects from './Projects.js';



export const Portfolio = () => {
  
    return (
        <div className = "portfolio-container">
            <div className = "navbar">
            <TopNav />
               
            </div>
            <div className = "navbar">
            <TopNav />
               
            </div>
            <div className = "main-section">
                <SectionContainer/>
            </div>
            <div >
                <About/>
                <Skills/>
                <Projects/>
            </div>
            

            
        </div>
        
    )
}

