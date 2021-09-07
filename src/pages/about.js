import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src="" alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                <p>My name is Cristina Tepelikian.</p>
    
    <p>I have a background in medicine and a Bachelor's of Science in Public Health. </p>
        
    <p>New to the coding world, attending the University of California, Berkeley Coding Bootcamp!</p>
   </div>
    </div>
       </blockquote>
    </div>
</div>
</div>

        </div>
    )
}
export default mainPage