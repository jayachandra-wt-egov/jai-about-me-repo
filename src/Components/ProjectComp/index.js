import React from "react";
import "./index.css";

class ProjectComp extends React.Component {

  render() {

    return (
                <div className="projComp">
                    <div className="proj">
                      <h2 id="inner1">30+</h2>
                      <h2 id="inner2">Projects</h2>
                    </div>
                    <div className="proj">
                      <h2 id="inner1">60+</h2>
                      <h2 id="inner2">Mentees</h2>
                    </div>
                    <div className="proj">
                      <h2 id="inner1">14+</h2>
                      <h2 id="inner2">Publications</h2>
                    </div>
                    <div className="proj">
                      <h2 id="inner1">10+</h2>
                      <h2 id="inner2">Certifications</h2>
                    </div>
                </div>
            )
  }
}

export default ProjectComp;