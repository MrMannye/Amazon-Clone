import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Menu() {
    return (
        <div className='menu'>

            <div className="menu__nav">
                <Link to='/' className='menu__icon'>
                    <MenuIcon style={{ fontSize: 28 }} classname=''></MenuIcon>
                    <span>Todo</span>
                </Link>
                <Link to='/' className='menu__icontwo'>
                    <span>Los Más Vendidos</span>
                </Link>
                <Link to='/' className='menu__icontwo'>
                    <span>AmazonBasics</span>
                </Link>
                <Link to='/' className='menu__icontwo'>
                    <span>Prime</span>
                    <ArrowDropDownIcon className='arrow__icon' fontSize='small'/>
                </Link>
                <Link to='/' className='menu__icontwo'>
                    <span>Promociones</span>
                </Link>
            </div>


            <Link to='/checkout' className='amazon__image'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/33/MX-hq/2017/img/Amazon_Payments/XCM_1080606_Manual_400x39_1080606_mx_amazon_payments_amazoncash_swm_evergreen_17_400x39_jpg_AmazonCash_swm_Evergreen._CB485923805_.jpg" alt=""/>
            </Link>

        </div>
    )
}

export default Menu
