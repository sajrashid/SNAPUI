import React, { Component } from 'react';
import _ from 'lodash'
import './editor.css'
import shortid from 'shortid'
import { Button } from 'semantic-ui-react'

//componenet
export default class Editor extends Component {



  constructor(props) {
    super(props);
    this.state = {
      sortDirection: true,
      json: props.json, // using a prop called json. were setting state.data to json
      options: props.options || {}, //optional object options
      id: props.id,
    }
  }
  //thandleStateChange is pased to child component
  //  in footer if options.editable is set to true
  handleUpdateClick = (value) => {
    alert(value)
  }
  onChange = (evt) => {
    let el =evt.currentTarget
    let arrIndex = this.props.id - 1
    let json=this.state.json
    let selectedItemPropName=el.value
  
    json[arrIndex][selectedItemPropName]=el.value

    this.setState({json:json})



    // this.setState({json:json[arrIndex]})
    // this.setState({ selectedRowId: Id})
  }

  createEditor = () => {
    // hide column if columname in hidden columns array
    /// if no hidecol option we set it an empty array
    // loops throgh hiddenCol array and returns a bool

    // build values
    let arrIndex = this.props.id - 1
    let row = this.state.json[arrIndex];

    return Object.keys(row).map((key, index) =>


      <div key={key + index + row} class="row">
        <div key={key + index + 'left' + row}  class="column leftCol">
          <p key={key + index}>{key}</p>
        </div>
        <div key={key + index + 'left' + row} class="column rightCol">
          <input onChange={this.onChange} key={key + index + 'inp'} type="text" value={row[key]} />
        </div>
      </div>


    )


  }


  render() {
    return (

      <div className='editor ui divided two column grid' >
        <div className='editorcaption' ><p><b>Update</b></p></div>
        {this.createEditor()}
        <div className='editorfooter'>
          <Button.Group footerBtnDiv>
            <Button>Cancel</Button>
            <Button.Or />
            <Button positive>Save</Button>
          </Button.Group>
        </div>
      </div>


    )
  }
}