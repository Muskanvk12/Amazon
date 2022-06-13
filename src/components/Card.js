import './productCard.css'
import './card.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import prime from '../Data/primepng.png'

export default function Card(details) {
    console.log(details)
    return (
        <div className='productCard productCard2'>
            <div className='productImg'>
                <img className='productImage' src={`${details.details.image}`} alt="Headphone" />
            </div>
            <div className="productDetail">
                <div className="productName">{details.details.title}</div>
                <div className="productRatings">
                    <span className="ratingsWrapper">
                        <span className="ratingsIcon" ><StarIcon style={{ fontSize: '120%' }} /></span>
                        <span className="ratingsIcon" ><StarIcon style={{ fontSize: '120%' }} /></span>
                        <span className="ratingsIcon" ><StarIcon style={{ fontSize: '120%' }} /></span>
                        <span className="ratingsIcon" ><StarBorderIcon style={{ fontSize: '120%' }} /></span>
                        <span className="ratingsIcon" ><StarBorderIcon style={{ fontSize: '120%' }} /></span>
                    </span>
                    <span className="ratingsDetails"><KeyboardArrowDownIcon style={{ fontSize: '13px' }} /></span>
                    <span className="ratingsTotal">{details.details.rating}</span>
                </div>
                <div className="productPrice">
                    <span><span className='priceIcon'><CurrencyRupeeIcon style={{ fontSize: '11px' }} /></span>{details.details.price}</span>
                    <span className='oldPrice'><CurrencyRupeeIcon style={{ fontSize: '13px', marginBottom:'1px' }} /><span className='oldPriceNumber'>{details.details.oldPrice}</span><span className='delete'></span></span>
                </div>
                <div className="productDelivery">
                    <span className='deliveryDateWrapper'><img className='primeImg' src= {prime} alt="" /><p>Get it by <span className='deliveryDate'>{details.details.deliveryDate}</span></p></span>
                    <p>{details.details.deliveryRate}</p>
                </div>
            </div>
        </div>
    )
}