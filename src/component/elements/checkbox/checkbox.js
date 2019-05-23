import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react'

export default class UiCheckBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            label: this.props.label,
            checked: this.props.checked
        };
    }
    render() {
        return (
            <Checkbox label={this.state.label} name={this.state.name} checked={this.state.checked} onChange={this.handleChange.bind(this)} />
        );
    }


    handleChange() {
        this.setState({
            checked: !this.state.checked
        });
       
        console.log("name:" + this.state.name);
        console.log("prop:" + this.props.checked);
        console.log("state:" + !this.state.checked);
    }
}

