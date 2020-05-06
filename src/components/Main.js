import React, { Component } from 'react';

import NavBar from './Navbar';
import Translate from './Translate';



class Main extends Component {

    render() {
        return (
            <div id="app">
                <NavBar />
                <div className="header">
                    <div className="introduction">
                        <h1 className="title">
                            <Translate id="welcome" />,<br /><Translate id="name" />
                            <span className="orange"> Océane Salmeron</span>.</h1>
                        <p><Translate id="intro"/></p>
                    </div>

                </div>
            </div>
        );
    }

}


export default Main;