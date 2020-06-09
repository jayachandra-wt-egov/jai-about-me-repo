import React from "react";
import "./index.css";
import myPic from "../../Assets/profile.jpeg";

class IntroWithPic extends React.Component {

  render() {

    return (
            <div>
                <div className="compWithColor">
                <div className="imageStyle">
                  <img src={myPic} alt="pic" className="ProfileStyle"/>
                </div>
                <div className="textname">
                  <h2>Jaya Chandra</h2>
                  <h2>React Developer</h2>
                </div>

                </div>
            </div>
            )
  }
}

export default IntroWithPic