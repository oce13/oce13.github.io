import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwitchLanguage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fr: true,
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        this.setState((state) => ({ fr: !state.fr }));

    }

    componentDidUpdate() {
        var lang;
        if (this.state.fr) {
            lang="FR";
        } else {
            lang="EN";
        }
        const action = { type: "LANGUAGE_UPDATE", payload: lang };
        this.props.dispatch(action);
    }

    render() {
        return (
            <div className="switch-language">
                <p>Fr</p>

                <input
                    type="checkbox"
                    id="toggleSwitch"
                    className="toggle-checkbox"
                    onClick={this.handleClick}
                />
                <label
                    style={{ backgroundColor: this.state.fr ? "grey" : "#06D6A0" }}
                    htmlFor="toggleSwitch"
                    className="toggle-label"
                >
                    <span className="toggle-button"></span>
                </label>

                <p>Eng</p>
            </div>


        );
    }

}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(SwitchLanguage);