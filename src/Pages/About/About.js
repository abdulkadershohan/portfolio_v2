import React, {Component} from 'react';
import profile from "../../images/img 2.jpg";
import cv from '../../CV/MD Abdul Kader.pdf'
import './about.css'

class About extends Component {
    render() {
        return (
            <section id="about">
               <div className="gap">
                   <div className="container"
                   >
                       <div className="title">
                           <h1 className="text-warning pt-3">About</h1>
                       </div>
                       <div className="row gap">

                               <div className="content-left col-md-6 ">
                                   <img className="d-block img-fluid img-thumbnail" src={profile} alt="profile-pic"/>
                               </div>
                               <div className="content-right col-md-6 ">
                                   <p className="knowledge">
                                       Programmer || Front End Developer | React || Python || Windows Form Application
                                   </p>

                                   <p className="intro ">
                                       An extremely positive and individual & can stay focused and motivated. Responsible,
                                       dependable and takes great pride in all my work. Can work both independently and in a team,
                                       which has been proven from past work experience and academic experiences.
                                   </p>
                                   <div className="bio text-white">
                                       <p><font color="#87AFC7">Name :</font> MD ABDUL KADER</p>
                                       <p><font color="#87AFC7">Gender :</font> Male</p>
                                       <p><font color="#87AFC7"> Email :</font> abdulkadirshohan@gmail.com</p>
                                       <p><font color="#87AFC7"> Date of Birth :</font> 31-12-1999 </p>
                                       <p><font color="#87AFC7"> Nationality :</font> Bangladeshi</p>
                                       <p><font color="#87AFC7"> Phone :</font> +8801766614798 </p>
                                       <a href={cv} className="btn btn-outline-warning  text-uppercase ">Download CV</a>
                                   </div>

                               </div>

                       </div>

                   </div>
               </div>
            </section>
        );
    }
}

export default About;