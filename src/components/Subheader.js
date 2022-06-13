import React from 'react';
import {Link} from 'react-router-dom';
import './subheader.css'
import MenuIcon from '@mui/icons-material/Menu';

const Subheader = () => {
    return (
        <div className='subheader'>
            <div className="subheaderLeft">
                <div className="subheaderProducts subheaderMenu"><MenuIcon/><p>All</p></div>
                <Link to="/content" className="subheaderProducts">Headphones</Link>
                <Link to="/mobile" className="subheaderProducts">Mobiles</Link>
                <div className="subheaderProducts">Women's Fashion</div>
                <div className="subheaderProducts">Home & Kitchen</div>
                <div className="subheaderProducts">Computers</div>
                <div className="subheaderProducts">Beauty</div>
                <div className="subheaderProducts">Baby Products</div>
                <div className="subheaderProducts">Fitness</div>
                <div className="subheaderProducts">Grocery</div>
                <div className="subheaderProducts">Health & Fitness</div>
                <div className="subheaderProducts">Appliences</div>
            </div>
            <div className="subheaderRight">
                <img src="/images/joinPrime.jpg" alt="" />
            </div>
        </div>
    );
}

export default Subheader;

