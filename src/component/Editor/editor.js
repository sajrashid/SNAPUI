import React, { Component } from 'react';
import _ from 'lodash'
import './editor.css'
import shortid from 'shortid'
//componenet
export default class Editor extends Component {



constructor(props) {
    super(props);
    this.state = {
      sortDirection: true,
      json: props.json, // using a prop called json. were setting state.data to json
      options: props.options || {}, //optional object options
      id:props.id,
    }
  }
  //thandleStateChange is pased to child component
  //  in footer if options.editable is set to true
handleUpdateClick = (value) => {
    alert(value)
 }
 onChange = (e) => {

    let arrIndex=this.props.id -1
    let row = this.state.json[arrIndex];
   // this.setState({json:json[arrIndex]})
   // this.setState({ selectedRowId: Id})
 }

 buildKeys = () => {
    let keys = Object.keys(this.state.json[0]);
    let self = this
    return keys.map((key, index) => {
      // hide column if columname in hidden columns array
      /// if no hidecol option we set it an empty array
      let hiddenColArr = self.state.options.hideCol || []
      // loops throgh hiddenCol array and returns a bool
      let isHidden =  _.includes(hiddenColArr, key) 

     // build values
     let arrIndex=this.props.id -1
     let row = this.state.json[arrIndex];

     return Object.keys(row).map((key2)  =>

     <div key={shortid.generate()} className='row'   >{key}
    
        <input  onChange={this.onChange} key={shortid.generate()} type="text" value={row[key2]} />

     </div>

     )
       
    })
 }
 buildValues = () => {
     let arrIndex=this.props.id -1
     let row = this.state.json[arrIndex];
   
 }

 render() {
    return (
    <div key={shortid.generate()} className='editor ui  grid'>
        <div key={shortid.generate()} className='editorRow'>
            {this.buildKeys()}
            {this.buildValues()}
        </div>
    </div>
    
    )
 }
}