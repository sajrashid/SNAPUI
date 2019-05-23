import React from 'react'
import  './infoPopUp.css'

export default class InfoPopUp extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            hideToolTip: true
        };
        
    }



    render() {
       // console.log(this.props);
        const style = this.state.hideToolTip ? { display: 'none' } : {};
        return (
            <div className="infoPopUp" onMouseEnter={this.ShowHide.bind(this)} onMouseLeave={this.ShowHide.bind(this)}   >
                <i aria-hidden="true" className="red users icon"></i>

                <div className="infoPopUpText" style={style}> {this.props.message} </div>
            </div>
            )
    }
    ShowHide() {
        this.setState({
            hideToolTip: !this.state.hideToolTip
        })
    }

 
  
};

//use like this < div className = "row" > Image Search < InfoPopup message = { message } /> </div >
