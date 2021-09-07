import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/passwords-galore">
                                    <img src="public/password generator.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Passwords Galore</p>
                                <p id="repo"><a href="https://github.com/htepelikian/passwords-galore">https://github.com/htepelikian/passwords-galore</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/code-quiz-mania">
                                    <img src=""
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Code Quiz</p>
                                <p id="repo"><a href="https://github.com/htepelikian/code-quiz-mania"
                                >https://github.com/htepelikian/code-quiz-mania</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/work-day-busy-bee">
                                    <img src="img/quiz3.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Work Planner</p>
                                <p id="repo"><a href="https://github.com/htepelikian/work-day-busy-bee"
                                >https://github.com/htepelikian/work-day-busy-bee</a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/weather-on-demand">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather Dashboard</p>
                                <p id="repo"><a href="https://github.com/htepelikian/weather-on-demand"
                                >https://github.com/htepelikian/weather-on-demand</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/three-word-history">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project 1: Three-Word-History</p>
                                <p id="repo"><a href="https://github.com/htepelikian/three-word-history"
                                >https://github.com/htepelikian/three-word-history</a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://github.com/htepelikian/Tidy">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project: Tidy</p>
                                <p id="repo"><a href="https://github.com/htepelikian/Tidy"
                                >https://github.com/htepelikian/Tidy</a></p>

                            </div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/htepelikian">
                            https://github.com/htepelikian</a> </p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/cristina-hripsime-t-1bb4091a7/"
                            >https://www.linkedin.com/in/cristina-hripsime-t-1bb4091a7/</a></p>
                            <p>Email Address: htepelikian@gmail.com</p>

                        </div>
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio