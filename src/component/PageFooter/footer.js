﻿import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {


    render() {
        return (
            <div className='footer'>
                Copyright © {(new Date().getFullYear())} Company.com. 
            </div>
        );
    }
  
}
