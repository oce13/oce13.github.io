import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import SwitchLanguage from './Language';
import Translate from './Translate';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.listener = null;
        this.state = {
            isScrolled: false,
        };
        this.nav = React.createRef();
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= this.nav.current.clientHeight) {
                if (!this.state.isScrolled) {
                    this.setState({ isScrolled: true });
                }
            } else {
                if (this.state.isScrolled) {
                    this.setState({ isScrolled: false });
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
        return (
            <div className="navBar" ref={this.nav} style={{
                backgroundColor: this.state.isScrolled ? "rgb(14, 9, 15)" : "transparent",
                color: this.state.isScrolled ? "white" : "white",
            }}>
                <div className="logo">
                    <img src={logo} alt="logo" height="50px"/>
                </div>
                <div className="links">
                    <a href="#about"><Translate id="about"/></a>
                    <a href="#exp"><Translate id="exp"/></a>
                    <a href="#project"><Translate id="project"/></a>
                    <SwitchLanguage/>
                </div>

            </div>
        );
    }

}

export default NavBar;