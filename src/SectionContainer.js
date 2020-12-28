import React from 'react'
import './sectioncontainer.css'
import Prachi from './Prachi.jpg'
import Typing from 'react-typing-animation';





export const SectionContainer = (props) => {
return (
<div>
    <h1 className = "container">
       <img src= {Prachi} height = "300" crop="fill" effect="sepia" radius="100"
       alt="pic" />
       <div className = "intro"> <h2>Hi I am Prachi!</h2></div> 
    <div className="quote">
     
    <Typing>
    <span> I am a </span>
    <span> coder</span>
    <Typing.Reset count={1} delay={500} />
    <span> learner</span>
    <Typing.Reset count={1} delay={500} />
    <span> leader </span>
  </Typing>

    </div>
    </h1>
</div>
 
)

}




