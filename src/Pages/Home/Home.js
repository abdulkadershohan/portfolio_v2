import React, { Component } from "react";
import profile from "../../images/IMG_2087-01.jpeg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="gap">
          <div className="container "
          >
            <div className="row ">
              <div className="col-lg-8">
                <div className="content-left text-left p-3">
                  <p className="text-white ">Hello!</p>
                  <h1>
                    I'm <font color="#17d1ac">MD Abdul </font> Kader
                  </h1>
                  <p className="university text-light font-weight-bold">
                    I studied at Bangladesh University of Business and Technology
                    (BUBT)
                    <p className="text-warning">
                      Department of Computer Science & Engineering{" "}
                    </p>
                  </p>
                  <a
                      href="#contact"
                      className='btn btn-outline-warning'
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content-right">
                  <img
                      className="d-block border rounded-circle img-fluid img-thumbnail my-5 profile-pic"
                      src={profile}
                      alt="profile-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
