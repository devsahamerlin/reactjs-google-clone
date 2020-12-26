import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from './Search';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className="home_headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <AccountCircleIcon />

                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                <div className="home_inputContainer">
                     <Search />
                </div>
            </div>
            <div className="home__footer">
                <Footer />
            </div>
        </div>
    );
    
}

export default Home
