import React, { Component } from 'react';
import './stable.css'
import _ from 'lodash'
import SRow from './SRow'
import SuperEditor from '../Editor/editor'

//componenet
export default class SuperTable extends Component {
  // ********************************************************************
  // https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/
  //*********************************************************************
  constructor(props) {
    super(props);
    this.state = {
      sortDirection: true,
      json: props.json, // using a prop called json. were setting state.data to json
      options: props.options || {}, //optional object options
      footerDisplayStyle:'none',
      editorVisible:false,
      isEditorVisible:'none',
      selectedRowId:1
    }
  }
  //handleRowStateChange is pased to child component
  //  in footer if options.editable is set to true
  handleRowStateChange = (Id) => {
    this.setState({ selectedRowId: Id})
   }

  HeaderClick = (e) => {
    // get the col name from the elemenets innerText property
    let col = e.currentTarget.innerText
    let sortDirection = this.state.sortDirection
    this.setState({ sortDirection: !sortDirection })
   
    // sorts the json object array by the selected headerName 'col' & toggles
    // a bool, then passes sortDirection eirther 'asc'or 'desc' 
    // using the loadash ordeBy function
    // then update json using setState
    // this will force the table to re-render
    this.setState({ json: _.orderBy(this.props.json, col, sortDirection = sortDirection ? 'asc' : 'desc') })
  }

  //  called from render method
   createHeader = () => {
        let keys = Object.keys(this.state.json[0]);
        let self = this
        return keys.map((key, index) => {
        // hide column if columname in hidden columns array
        /// if no hidecol option we set it an empty array
        let hiddenColArr = self.state.options.hideCol || []
        // loops throgh hiddenCol array and returns a bool
        let isHidden =  _.includes(hiddenColArr, key) 
        if  (!isHidden){
            return <th key={key} onClick={this.HeaderClick} >{key}</th>
        }
        })
   }
   showEditor= () => {
        this.setState({ editorVisible: true, isEditorVisible: 'block'})
   }

  render() {
        let isFooterVisible = this.state.options.footer ? 'block' : 'none'
        let isEditorElementsVisible ='none'
        if( this.state.options.editable) {
            isFooterVisible = 'block' //enable by default just in case we forget
        // enable editor
        isEditorElementsVisible = 'block' 
        }
    
        return (
        <div>
                <table className={'ui ' + this.state.options.styles + ' table'}  >
                    <thead>
                        <tr>{this.createHeader()}</tr>
                    </thead>
                <SRow json={this.state.json} options={this.state.options} handleRowStateChange= {this.handleRowStateChange}  />
                </table>
                    <div style={{display : isFooterVisible}} className='footer'>footer
                        <div style={{display : isEditorElementsVisible}}>
                            <a  onClick={this.showEditor} >Edit</a>
                            <a  onClick={this.closeEditor} >cancel</a>
                        </div>
                    </div>
                <div style={{display : this.state.isEditorVisible}} >
                    <SuperEditor json={this.state.json} options={this.state.options} id={this.state.selectedRowId} />
                </div>

        </div>
        )
    }

}

//componenet








