import React from 'react';
import './topnav.css'
import {Link} from 'react-scroll';


export const TopNav = ({handleSectionClick}) => {
    return (
        <div className = "topnav">
            <Link
            className ="about-me"
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>About Me</Link>

<Link
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Experience</Link>

<Link
    activeClass="active"
    to="projects"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Projects</Link>
            
<Link
    activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Contact</Link>
            
           
        </div>
    );
};