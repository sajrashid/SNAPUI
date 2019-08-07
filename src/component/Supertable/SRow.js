import React, { Component } from 'react';
import SCell from './SCell'

export default class SRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowElement: null, // using a prop called json. were setting state.data to json
        }
    }

    ClearRowSelection= (e) => {
        
    }

    RowClick = (e) => {
        let row = e.currentTarget;
        let prevRow=this.state.rowElement
        if(prevRow){
            prevRow.style.backgroundColor=''
        }
        this.setState({rowElement:row})
        let rowId= row.cells[0].innerText
        row.style.backgroundColor='#f0f8ff'
        //this calls function in parent STable to update state
        this.props.handleRowStateChange(rowId)
    }

    CreateRows = () => {
      let items = this.props.json
      let options = this.props.options
      let keys = Object.keys(this.props.json[0])
  
      return items.map((row, index) => {
        return <tr onClick={this.RowClick}    key={index} ><SCell  data={row} keys={keys} options={options} /></tr>
      })
    }
  
    render() {
      return (
        <tbody>
          {this.CreateRows()}
        </tbody>
      )
    }
  
  }