import React, { Component } from 'react';
import _ from 'lodash'
import './editor.css';

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
    
        return <div key={key}  >{key}</div>
    })
 }
 buildValues = () => {
     let arrIndex=this.props.id -1
    let row = this.state.json[arrIndex];

    return Object.keys(row).map((key)  =>
    <div>
     <input onchange={this.onChange} key={key +this.props.id } type="text" value={row[key]} />

    </div>

     )
         
   
 }

 render() {
    return (
    <div className='editor'>
        <div className='row editorRow'>
             <div className='editorRowC'>
             {this.buildKeys()}
             </div>
            <div className='editorRowC'>
            {this.buildValues()}
            </div>
        </div>
    </div>
    
    )
 }
}