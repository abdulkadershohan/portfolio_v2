import React, {Component} from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
export default class Contact extends Component {
    sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_o582ndg', e.target, 'user_ms5ma3h5keiRP0i9LNxE9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    render() {
        return (
            <section id='contact'>
               <div className="gap">
                   <div className='container'>
                       <div className="title text-center gap">
                           <h1 className="text-warning ">Contact me</h1>
                       </div>
                       <div className="row">
                           <div className=" col-md-12 col-lg-4">
                               <div className="content-left text-center">

                                   <h1 className='text-light '>i'm available anytime on those platform</h1>

                                   <div className="social-link ">
                                       <ul className='list-unstyled d-flex justify-content-between'>
                                           <li>
                                               <a href="https://www.facebook.com/abdulkadirshohan/" target={'_blank'}><i className="fab fa-facebook fa-4x text-warning"></i></a>
                                           </li>
                                           <li >
                                               <a href="https://www.linkedin.com/in/abdul-kader-shohan/" target='_blank'><i className="fab fa-linkedin fa-4x text-warning"></i></a>
                                           </li>
                                           <li >
                                               <a href="https://github.com/abdulkadershohan" target='_blank'><i className="fab fa-github fa-4x text-warning"></i></a>
                                           </li>
                                           <li >
                                               <a href="https://www.instagram.com/abdulkadir.shohan.5/" target='_blank'><i className="fab fa-instagram fa-4x text-warning"></i></a>
                                           </li>
                                       </ul>


                                   </div>
                               </div>

                           </div>
                           <div className=" col-md-12 col-lg-8">
                               <div className="content-right contact-form text-white">
                                   <form onSubmit={this.sendEmail}>
                                       <div className="row mx-auto">
                                           <div className="col-8 form-group mx-auto ">
                                               <input type="text" className="form-control" placeholder="Name" name="name" required/>
                                           </div>
                                           <div className="col-8 form-group pt-2 mx-auto">
                                               <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                                           </div>
                                           <div className="col-8 form-group pt-2 mx-auto">
                                               <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                                           </div>
                                           <div className="col-8 form-group pt-2 mx-auto">
                                               <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                                           </div>
                                           <div className="col-8 pt-3 mx-auto">
                                               <button type="submit" className="btn btn-outline-warning btn_submit" value="Send Message">Send Message</button>
                                           </div>
                                       </div>
                                   </form>
                                   <div className="gap"></div>

                               </div>

                           </div>
                       </div>


                   </div>
               </div>
            </section>
        );
    }
}

