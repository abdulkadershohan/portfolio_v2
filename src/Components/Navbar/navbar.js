import React, {Component} from "react";
import "./navbar.css";

class Navbar extends Component {
    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        return (
            <section id="navbar">
            <div className="gap">
                <div className="container">
                    <div className="row p-2">
                        <div className="col-lg-4">
                            <div className="logo">
                                <a
                                    className="text-white text-decoration-none font-weight-bold "
                                    href="/"
                                >
                                    MD ABDUL KADER
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 ">
                            <nav className="NavbarItems">
                                <div className="menu-icon" onClick={this.handleClick}>
                                    <i
                                        className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                                    ></i>
                                </div>
                                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                                    <div className="justify-content-between">

                                    </div>
                                    <li className="nav-links">
                                        <a
                                            className="text-white text-decoration-none font-weight-bold"
                                            href="#"
                                        >
                                            HOME
                                        </a>
                                    </li>
                                    <li className="nav-links">
                                        <a
                                            className="text-white text-decoration-none font-weight-bold"
                                            href="#about"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="nav-links">
                                        <a
                                            className="text-white text-decoration-none font-weight-bold"
                                            href="#skills"
                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav-links">
                                        <a
                                            className="text-white text-decoration-none font-weight-bold"
                                            href="#portfolio"
                                        >
                                            Portfolio
                                        </a>
                                    </li>
                                    <li className="nav-links">
                                        <a
                                            className="text-white text-decoration-none font-weight-bold"
                                            href="#contact"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>

                </div>

            </div>
            </section>
        );
    }
}

export default Navbar;
