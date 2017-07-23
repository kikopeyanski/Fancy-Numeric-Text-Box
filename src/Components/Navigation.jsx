import React, {Component} from 'react';
import githubLogo from '../img/github-logo.png';

class Navigation extends Component {
    render() {
        return (
            <div className='nav-wrapper'>
                <div className="nav">
                    <div className="signature-wrapper">
                        <p><span>Designed</span> <span>Developed</span></p>
                        <p>by Kiril Stefanov Peyanski</p>
                    </div>
                    <div className="github-wrapper">
                        <button className="github-button">
                            <a href="https://github.com/kikopeyanski">
                                <img src={githubLogo} alt="github"/>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;