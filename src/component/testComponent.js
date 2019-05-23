import React, { Component } from 'react';

export default class TestComp extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        //  call like this <TestComp name="Jack"}/>
        //  call like this <TestComp data={tableData}/>

        console.log("Test comp " + this.props.name);

        return (
            <h1>Prop: {this.props.name} </h1>
        )
    }



}




