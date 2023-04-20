import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {
    
    state = {  }
    render() { 
        return ( 
        <>
            <div id="header-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="svg-logo" id="logo" />
                <h1>
                    Markdown Viewer
                </h1>
            </div>
        </> 
        );
    }
}
 
export default NavBar;