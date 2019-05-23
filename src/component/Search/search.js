import React, { Component } from 'react';
import {  Popup,  Divider,  Transition  } from 'semantic-ui-react'
import  './search.css'
import UiCheckBox from '../elements/checkbox/checkbox'
import StringHelper  from '../../helpers/stringHelper'

export default class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            searchString: '',
            supplierFilterVisible: false,
            required: false,
            actionMessage:''
        };
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        const message = "Yes it searches stuff.";
        const style = this.state.required ? { borderColor: 'red' } : { borderColor: 'rgba(34,36,38,.15)'};
        const { supplierFilterVisible } = this.state
        return (

            <div>

                <div className="ui input">
                <div className='actionMsg'>
                    {this.state.actionMessage}
                </div>
                    <div className='info'>
                        <Popup trigger={<i aria-hidden="true" className=" circle  info  icon"></i>} content={message} />
                    </div>
                    <input required style={style}  className="required" type="text" value={this.state.comment}
                        onChange={this.handleChange.bind(this)}
                        placeholder="Search...or paste URL" />

                    <button className="ui icon button" onClick={this.handleClick}>
                        <i aria-hidden="true" className="search icon"></i>
                    </button>

                    <button className="ui icon button" onClick={this.toggleVisibility} >
                <i className="filter icon " content={supplierFilterVisible ? 'Hide' : 'Show'} ></i>
                </button>

                <Divider hidden />
                <Transition visible={supplierFilterVisible} animation='scale' duration={500}>

                    <div className='ui doubling three column grid'>
                       

                        <div className="column">
                            <UiCheckBox name={"Filter1"} label={"Filter1"} checked={false} />
                        </div>


                        <div className="column">
                            <UiCheckBox name={"Filter2"} label={"Filter2"} checked={false} />
                        </div>

                  
                    </div>
                </Transition>
           
                </div>

                
              

               
           </div>



        );
    }

    toggleVisibility = () => this.setState({ supplierFilterVisible: !this.state.supplierFilterVisible })


    handleClick(e) {
       // test not empty 
        if (!this.state.searchString) {
            console.log("searchString is empty");
            this.setState({
                required: !this.state.required
            })
        } else {
            var searchStr = this.state.searchString;
            // Not empty continue
             // test if string is valid URL 
            var match = StringHelper.MatchURL(searchStr);
            if (match) {
                this.setState({ actionMessage: "URL is valid" });
                // test if URL is from amazon or ebay or google Image
                var arrProviders = ['Amazon', 'Ebay', 'Google']
                var isUrlAmazonEbayGoogle = StringHelper.TestUrl(searchStr, arrProviders)
                if (isUrlAmazonEbayGoogle.isValid) {
                    //url is from ebay/amazon/or google
                    this.setState({ actionMessage: isUrlAmazonEbayGoogle.foundString + " URL detected" });

                } else {
                    this.setState({ actionMessage:" Invalid URL detected ensure URL is Amazon/Ebay or is a link to Google Image" });
                }

            } else {
                // not a url free text search
                this.setState({ actionMessage: "Text Query detected" });
            }

            
        }
       


        console.log(this.state.searchString);

    }

    handleChange(e) {
        this.setState({ searchString: e.target.value });

        if (e.target.value) {
            e.target.style.borderColor = "rgba(34,36,38,.15)";
        } else {
            e.target.style.borderColor = "red";
        }
        console.log(this.state.searchString);
    }


}




