import React from 'react';
import './App.css';
import IntroWithPic from "./Components/IntroWIthPic";
import ContactInfo from "./Components/ContactInfo/";
import ProjectComp from "./Components/ProjectComp/";
import IntroComp from "./Components/IntroComp";
import ExpComp from "./Components/ExperienceComp";
import EduComp from "./Components/EducationComp";
import SkillsComp from "./Components/SkillsComponent";
import ToolsComp from "./Components/ToolsComponent";
import HobbiesComp from "./Components/hobbiesComponent";


function App() {
  return (
    <div className="App">
    <div className="rowStyle">
      <IntroWithPic/>
      <ContactInfo/>
      </div>
      <ProjectComp/>
      <IntroComp/>
      <div className= "expEdu">
      <ExpComp/>
      <EduComp/>
      </div>
      <div className="expEdu">
      <SkillsComp />
      <ToolsComp/>
      <HobbiesComp/>
      </div>
    </div>
  );
}

export default App;
