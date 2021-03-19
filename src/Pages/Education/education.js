import React, {Component} from 'react';
import './education.css'

class Education extends Component {
    render() {
        return (
            <section id="experience">
                <div className="gap">
                    <div className="container">
                        <div className="row">
                            <div className=" col-md-6 ">
                                <div className="title-left title">
                                    <h1 className="text-warning pt-3 pb-2 text-center">Education</h1>

                                    <ul className="list-unstyled p-3 ml-3">
                                        <li className="text-white">
                                            <h3>Bangladesh University of Business and Technology (BUBT)</h3>
                                            <span className="text-muted ">Feb 2018－Present</span>
                                            <p >BSC In Computer
                                                Science
                                                &
                                                Engineering</p>
                                        </li>
                                        <li className="text-white">
                                            <h3>Dhunat Government Degree College</h3>
                                            <span className="text-muted">Mar 2015－Apr 2017</span>
                                            <p>Higher Secondary
                                                Certificate Examination</p>

                                        </li>
                                        <li className="text-white">
                                            <h3>Dhunat Adarsha High School</h3>
                                            <span className="text-muted">Mar 2010－Feb 2015</span>
                                            <p >Secondary School
                                                Certificate Examination</p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" col-md-6 ">
                                <div className="title-right title">
                                    <h1 className="text-warning pt-3 pb-2 text-center">Experience</h1>
                                    <ul className="list-unstyled p-3 ml-3">
                                        <li className="text-white">
                                            <h3>COVID-19 Survey Form</h3>
                                            <span className="text-muted ">Aug 2020－Dec 2020</span>
                                            <p className=' font-weight-bold '>Design and
                                                Development
                                                Web Applications using React Js</p>
                                        </li>
                                        <li className="text-white">
                                            <h3><br/>COVID-19 Live States</h3>
                                            <span className="text-muted">Mar 2020－Apr 2020</span>
                                            <p className='font-weight-bold '>Design and
                                                Development
                                                Web Applications using React Js</p>

                                        </li>
                                        <li className="text-white">
                                            <h3>University Management System</h3>
                                            <span className="text-muted">Feb 2019－Jun 2019</span>
                                            <p className=' font-weight-bold '>Design and
                                                Development
                                                using C#</p>

                                        </li>

                                    </ul>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default Education;