import React from "react";

import "./index.css";
import myQuoraPic from "../../Assets/quora1.png";
import myLinkdenPic from "../../Assets/linkden.png";

class ContactInfo extends React.Component {

  render() {

    return (
            <div>
                <div className="contactComp">
                <div className="quoraStyle">
                  <img className="picSize" src={myQuoraPic} alt="pic"/>
                  <h2>https://www.quora.com/profile/Jaya-Chandra-246</h2>
                </div>
                <div className="quoraStyle">
                  <img className="picSize" src={myLinkdenPic} alt="pic"/>
                  <h2>https://www.linkedin.com/in/jaya-chandra-07915a184</h2>
                </div>
                </div>
            </div>
            )
  }
}

export default ContactInfo