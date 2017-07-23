import React, {Component} from 'react';
import arrow from '../img/arrow.png';
import triangle from '../img/Shape 3.png';
import demo from '../img/NumericTextBoxDemo.png';

import {
    Link
} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div className="main">
                <h1>THE MOST ADVANCED <br/> NUMERIC <span>TEXT</span> BOX!</h1>
                <div className="buttons-links-wrapper">
                    <button className="source-code">
                        <a href="https://github.com/kikopeyanski/Fancy-Numeric-Text-Box">EXPLORE SOURCE CODE</a>
                    </button>
                    <button className="technologies">
                        <Link to="/tech">
                            VIEW TECHNOLOGIES BEHIND
                        </Link>
                    </button>
                </div>
                <div className="arrow-wrapper">
                    <img src={arrow} alt="click here!"/>
                </div>
                <Link to="/app">
                    <div className="app-bg">
                        <img src={triangle} alt=""/>
                    </div>
                </Link>
                <Link to="/app">
                    <div className="app-button">
                        <img src={demo} alt=""/>
                    </div>
                </Link>
            </div>
        );
    }
}

export default  HomePage;