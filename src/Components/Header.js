import React from 'react';
import PersonIcon from '@material-ui/icons/Home';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosICon from '@material-ui/icons/ArrowBackIos'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
const Header = ({ backButton }) => {
    const history = useHistory();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosICon fontSize="large" className="header__icon" />
                </IconButton>
            ): 
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            }
            <Link to="/">
                <img
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                    alt="tinder logo"
                    className="header__logo"
                />
             </Link>
             <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;