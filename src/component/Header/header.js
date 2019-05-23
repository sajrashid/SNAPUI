import React, { Component } from 'react';
import  './header.css';
import Logo from '../../images/toolkitlogo.png'
import Menu from '../menu/topmenu/Menu';
import { Icon, Label } from 'semantic-ui-react'

export default class Header extends Component {


    render() {
        return (
            
            <div className="headerwrap">
                <div className='row'>
                    <div className='logo'>
                        <img  className="middle"  alt="SNAP Logo" src={Logo} />SNAP
                    </div>
                    <div className='login'>

                        <Label>
                            <Icon name='user circle' /> <a hre='#'>Login</a>
                         </Label>

                        
                    </div>
                </div>
                
                <div className="menuWrap"> 
                    <Menu/>
                </div>
                </div>
        );
    }
  
}




