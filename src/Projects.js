import React, {Component} from 'react';
import './projects.css'


class Projects extends Component {
state ={};
render(){
    return <div className ="projects-section" id = "projects">
        <h1 className= "header-project">PROJECTS</h1>
        <div className = "project-style">
        <h1 className ="project-name"> #SORTED </h1>  
       
        <p>  Language and Framework: React.js, HTML, CSS, SQL <br/>
        Cloud based web application that saves a to-do list for each day of the week. </p>
        </div>

        <div className = "project-style">
        <h1 className ="project-name"> MONOPOLY </h1>
        <p>
        Language: C
       <br/> program built using object-oriented programming skills to replicate
         the monopoly board game. It makes moves, sells and buys properties and puts them on auction based on user commands. 
        </p >
        </div>

        <div className = "project-style">
        <h1 className ="project-name"> CFS SCHEDULING </h1>
        <p>  Language: C++ <br/>
         program that reads in the task descriptions and runs the Completely 
        Fair Scheduling strategy until all tasks have been completed. </p>
       </div>
        
        <div className = "project-style">
        <h1 className ="project-name"> MS PAINT (TEXT BASED VERSION)</h1>
        <p>  Language: C <br/> program that uses user commands to draw and erase certain figures. 
       </p>
        </div>
        
    </div>
}
}
export default Projects;

	