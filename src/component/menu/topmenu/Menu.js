import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom'
export default class TopMenu extends Component {

    render() {
        return (
          
            <div className="ui topmenu stackable menu">
                    <div className="item">
                        <NavLink to='/' exact={true} >
                            <i aria-hidden="true" className="home  icon 2x" ></i>
                            Home
                         </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to='/tests' >
                            <i aria-hidden="true" className="lab  icon" ></i>
                            Tests
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to='/analyze' >
                            <i aria-hidden="true" className="bug  icon" ></i>
                            Analyse
                        </NavLink>
                    </div>

                    <div className="item" >
                        <NavLink to='/Support'>
                            <i aria-hidden="true" className="exclamation triangle icon  red" ></i>
                            Support
                        </NavLink>
                    </div>
                </div>
          
      );
    }
}





