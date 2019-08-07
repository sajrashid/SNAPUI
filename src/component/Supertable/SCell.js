import React, { Component } from 'react';
import { Popup } from 'semantic-ui-react'
import _ from 'lodash'

export default class SCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json: props.json, // using a prop called json. were setting state.data to json
            options: props.options || {}, //optional object options
        }
    }

   



    CreateCells = () => {
        let self = this
      
        return this.props.keys.map((key, index) => {
            let booltest = this.props.data[key]

            let hiddenColArr = self.props.options.hideCol || []
            let infoColArr = self.props.options.infoCol || []

            let isHidden =  _.includes(hiddenColArr, key) 
            let isInfoCol =  _.includes(infoColArr, key) 
            let isCheckBox =typeof booltest === "boolean"

            // loop throgh hiddenCol array
            if (!isHidden){
                if (isInfoCol) {
                    // create info popup on   
                    return <td key={key + index} style={{ backgroundColor: this.props.data[key] }}> <Popup trigger={<i aria-hidden="true" className=" circle  info  icon"></i>} content={this.props.data[key]} />   </td>
                }
                if (isCheckBox) {
                   // create cehckbox  
                    return <td key={key + index} > <input readOnly='false' onClick={self.onCheckBoxChange} type='checkbox' checked={this.props.data[key]}></input> </td>
                } 
                // if no conditions are met return normal
                return <td key={key + index}>{this.props.data[key]}</td>
            }

        })
    }

    render() {

        return (
            this.CreateCells()
        )
    }


}