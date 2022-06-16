import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Subheader from './Subheader';
function Header(info) {
    return (
        <header className='headerWrapper'>
            <div className="headerTop">
                <Link to="/" className='onHover centerContent logoInHeader'>
                  <img id='AmazonLogo' src="/amazonLogo.png" alt="Amazon" /><span>.in</span>
                </Link>
                <div className='onHover centerContent usersLocationInHeader'>
                    <div className='locationIcon'><FmdGoodOutlinedIcon style={{fontSize: '120%'}}/></div>
                    <div className='locationText'>
                        <div className='hello'>Deliver to {info.info.name}</div>
                        <div className='addressText'>{info.info.city} {info.info.pincode}</div>
                    </div>
                </div>
                <div className='centerContent searchBar'>
                    <div className='centerContent AllBtn'>
                        <span>All</span>
                        <span><ArrowDropDownIcon/></span>
                    </div>
                    <div className='searchInput'>
                        <input type="text" name="search" id="search" />
                    </div>
                    <div className='centerContent searchBtn'><SearchIcon style={{fontSize: '200%'}}/></div>
                </div>
                <div className='onHover centerContent regionInHeader'>
                    <span className='Flag'><img className='flagImg' src="/IndianFlag.png" alt="" /></span>
                    <span className='downArrow'><ArrowDropDownIcon/></span>
                </div>
                <div className='onHover centerContent accountSignInInHeader'>
                    <div className='locationText'>
                        <div className='hello helloRight'>Hello, {info.info.name}</div>
                        <div className='addressText'>Account & Lists</div>
                    </div>
                    <span className='downArrow'><ArrowDropDownIcon/></span>
                </div>
                <div className='onHover centerContent usersOrdersInHeader'>
                    <div className='locationText'>
                        <div className='hello helloRight'>Returns</div>
                        <div className='addressText'>& Orders</div>
                    </div>
                </div>
                <Link className='onHover centerContent cartInHeader' to='/cart'><ShoppingCartOutlinedIcon style={{fontSize: '250%'}}/> <span className='notifier'>{info.info.cartLength}</span> <span>Cart</span></Link>
            </div>
            <Subheader info = {info}/>
        </header>
        
        
    )
}

export default Header;



