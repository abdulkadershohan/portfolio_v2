import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <section id='skills'>
               <div className="gap">
                   <div className="container">

                       <div className="title text-warning text-center pt-3 pb-2">
                           <h1>Skills</h1>
                       </div>
                       <div className="row skills-icon justify-content-center text-white pl-3 ml-3 pt-3 text-center">

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-cuttlefish fa-4x text-warning"></i>
                                   <h3>C-Program</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-python fa-4x text-warning"></i>
                                   <h3>Python</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-html5 fa-4x text-warning"></i>
                                   <h3>HTML</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-css3-alt fa-4x text-warning"></i>
                                   <h3>CSS</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-js fa-4x text-warning"></i>
                                   <h3>JavaScript</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-react fa-4x text-warning"></i>
                                   <h3>React JS</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-php fa-4x text-warning"></i>
                                   <h3>PhP</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-bootstrap fa-4x text-warning"></i>
                                   <h3>Bootstrap</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-linux fa-4x text-warning"></i>
                                   <h3>Linux</h3>
                               </div>
                           </div>

                           <div className="col-lg-2">
                               <div className="icon">
                                   <i className="fab fa-git-alt fa-4x text-warning"></i>
                                   <h3>Git</h3>
                               </div>
                           </div>
                           <div className="gap"></div>
                       </div>


                   </div>
               </div>
            </section>
        );
    }
}

export default Skills;