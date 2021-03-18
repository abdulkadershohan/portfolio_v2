import React, {Component} from 'react';
import './portfolio.css'
import image1 from '../../images/COVIT-19 Survey form.png'
import image2 from '../../images/live states.png'
import image3 from '../../images/UMS.png'

class Portfolio extends Component {
    render() {
        return (
            <section id='portfolio'>
                <div className="gap">
                    <div className='container'>
                        <div className="title">
                            <h1 className='text-warning text-center gap'>Portfolio</h1>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="content">
                                    <div className="text-center shadow">
                                        <div className="overflow">
                                            <img className='d-block img-fluid img-thumbnail image_portfolio'
                                                 src={image1} alt=""/>
                                        </div>
                                        <div className="card-body">
                                            <h4>covid-19 survey form</h4>
                                           <p>
                                               COVID-19 SURVEY FROM is an online survey site which can take a
                                               survey & gives feedback the level of risk infected by covid-19.
                                           </p>
                                            <a href='https://abdulkadershohan.github.io/sdp-3-web/' target='_blank' className='btn btn-outline-warning'>Learn More</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content">
                                    <div className="text-center shadow">
                                        <div className="overflow">
                                            <img className='d-block img-fluid img-thumbnail image_portfolio'
                                                 src={image2} alt=""/>
                                        </div>
                                        <div className="card-body">
                                            <h4>COVID-19 LIVE STATUS</h4>
                                            <p>
                                                COVID-19 LIVE STATUS is an api of worldometer which can provides the active death and recover
                                                worldwide and specific country.
                                            </p>
                                            <a href='https://abdulkadershohan.github.io/sdp-3-web/' target='_blank' className='btn btn-outline-warning'>Learn More</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className="content">
                                    <div className="text-center shadow">
                                        <div className="overflow">
                                            <img className='d-block img-fluid img-thumbnail image_portfolio'
                                                 src={image3} alt=""/>
                                        </div>
                                        <div className="card-body">
                                            <h4>university management system</h4>
                                            <p>
                                                manages basic task of an university.It has 3 part Admin Teacher & Students.This system is developed by C#.

                                            </p>
                                            <button className='btn btn-outline-warning'>Learn More</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;