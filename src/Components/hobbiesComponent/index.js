import React from "react";
import "./index.css";
import htmlpic from "../../Assets/html.png";
import csspic from "../../Assets/css.png";
import reactpic from "../../Assets/react.png";
import pubg from "../../Assets/pubg.jpeg";

class HobbiesComp extends React.Component {

  render() {

    return (
                <div className="hobbiesComp">
                <h2 >Hobbies</h2>
                  <img className="hobbiesSize" src={htmlpic} alt="pic"/>
                  <img className="hobbiesSize" src={csspic} alt="pic"/>
                  <img className="hobbiesSize" src={reactpic} alt="pic"/>
                  <img className="hobbiesSize" src={pubg} alt="pic"/>
                </div>
            )
  }
}

export default HobbiesComp;