import React from 'react';
import logo from '../logo.svg';
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const handleLogout = async () => {
        try {
            await Auth.signOut();
            history.push("/login");
        } catch (error: any) {
            console.log(error);
        }
    };

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={logo} className="App-logo" alt="logo" />Panic System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
};

export default Header;
