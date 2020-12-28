import React, {Component} from 'react';
import './projects.css'
import './skills.css'


class Skills extends Component {
state ={};
render(){
    return <div className ="skills-section" id = "skills">
        <h1 className = "heading">EXPERIENCE</h1>
         <body>

<div className ="timeline">
  <div className ="container-new left">
    <div className ="content">
      <h2 color = "black">Current</h2>
      <p>Software Engineering Intern @Qualcomm<br/>Team: 5G Physical Layer Software</p>
    </div>
  </div>
  <div className ="container-new right">
    <div className ="content">
      <h2>2019</h2>
      <p>Data Analyst Intern @nimoy.ai<br/>								
         Led a small team of interns to collect and analyze big data on small businesses. <br/>
•	Analyzed and visualized the sales for a restaurant using pandas, NumPy and matplotlib. <br/>
•	Designed prediction algorithm for small businesses using linear regression, logistic regression 
and k-means clustering. 
</p>
    </div>
  </div>
  <div className ="container-new left">
    <div className ="content">
      <h2 color = "black">2019</h2>
      <p>Research Intern @Cluster Innovation Center, Delhi University <br/>
      	Summer, 2018 Built authentication frameworks to target fraudulent activity in e-commerce websites. <br/>
•	Researched various recommender systems using matrix factorization and collaborative filtering. <br/>
•	Built efficient recommender system to find automated accounts using data<br/>
</p> 
    </div>
  </div>
  
  <div className ="container-new right">
    <div className ="content">
      <h2 color = "black">2018</h2>
      <p>Reasearch Intern @UC Davis Radiation Oncology<br/>
          Helped in building an application that uses an NLP model to classify
          and visualize new peer reviewed clinical trial publications
      </p>
    </div>
  </div>

  <div className ="container-new left">
    <div className ="content">
      <h2 color = "black">2018</h2>
      <p> Memebership Chair, Pyrtanean Women's Honor Society <br/>
        Facilitated outreach and tabling events for both Spring and Fall membership drives.<br/>
Organized application scoring and interviews for over 40 candidates for membership into the honor society.<br/>
Co-hosted the Senior Farewell event to honor those in the honor society who were graduating.<br/>
Planned and executed the Prytanean Initiation ceremony to celebrate the newly admitted members to the honors society.<br/>
Restructured the club's constitution to be more accessible to transfer and nontraditional students.
</p> 
    </div>
  </div>

  <div className ="container-new right">
    <div className ="content">
      <h2 color = "black">2018</h2>
      <p> Secretary @ Society of Women engineers at UC Davis<br/>
          Leverage organizational skills and excellence in written and oral communication to 
          collaborate with other officers in the planning and execution of events for hundreds of members<br/>
        Build and maintain relationships with academic leadership, student organizations, and company 
        representatives to provide members with opportunities for personal, professional, and academic growth
      </p>
    </div>
  </div>
    
</div>

</body>

    </div>;
}
}
export default Skills;


								




