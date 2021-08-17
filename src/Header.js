import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import {auth} from './firebase'

function Header() {

    const [{ basket, user}] = useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className='header'>
            
            {/* Logo Image on the left */}
            <Link to='/'>
                <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''></img>
            </Link>

            {/* Search bar */}
            <div className='header__search'>
                <input type='text'placeholder='Search Product' className='header__searchInput'></input>
                <SearchIcon className='header__searchIcon'></SearchIcon>
            </div>

            {/* 3 lINKS */}
            <div className="header__nav">
                {/* 1sr Link */}
                <Link to={!user && "/login"} className='header__link'>
                    <div onClick={login} className="header__option">
                        <span className='header__optionLineOne'>Hello {user?.email}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to='/' className='header__link'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* 4th Link */}
                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </div>
                </Link>
            </div>

            {/* Basket icon with number */}
            
        </nav>
    )
}

export default Header
