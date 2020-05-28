import React from "react";
import "./style.css";

function Container() {
    return(
        <div className="aboutpage">
            {/* <h3>My Story</h3>
            <hr /> */}
            <div className="row">
            <div className="col-md-6 aboutarea">
                <img className="profilepicture" src="https://images.unsplash.com/photo-1501686962565-1350ab98237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profilepic" />
            </div>
            <div className="col-md-6 aboutarea">
                <h5 className="bio bio1">
                Enthusiastic programmer motivated to learn, grow and excel in Software development and contribute to team success through hard work and excellent organizational skills. Clear understanding of HTML, CSS, JavaScript, Java. Effective at supporting team needs with high-quality code, subject matter expertise and collaboration skills.
                </h5>
            </div>
            </div>
      </div>
    );
}

export default Container;