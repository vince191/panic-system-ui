import React from 'react';
import logo from '../logo.svg';

type Props = {};

const Header = (props: Props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" />Panic System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            </div>
        </div>
    </nav>;
};

export default Header;
