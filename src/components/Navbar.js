import React, { Component } from 'react';

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
                    <div >We've got your back</div>
                </div>
                <div className="links">
                    <button>CV</button>
                </div>

            </div>
        );
    }

}

export default NavBar;