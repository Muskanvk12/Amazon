import React from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import CartCard from './CartCard'
import FilterBar from './FilterBar'

export default function Cart({cartData}){
    let cartLengthInCart = cartData.cart.length
    let addToCart = cartData.addToCart
    let  removeFromCart = cartData.removeFromCart
    let decrement = cartData.decrement
    if(cartData.cart.length === 0){
        return(
            <div className='cartComponentWrapper'>
            <div className="cartWrapper"><p className='emptyCartHeading'>Your Amazon Cart is empty.</p>
            <p className='emptyCartHeadingDesc'>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more. <br />
            Continue shopping on the <Link className='learnMore' to='/home'>Amazon.in homepage</Link>, learn about <Link className='learnMore' to='/home'>today's deals</Link>, or visit your <Link className='learnMore' to='/home'>Wish List</Link>.</p>
            </div>
            </div>
        )
    }
    else{
        return(
            <div className="cartComponentWrapper">
            <div className="cartWrapper">
                <h1 className='shoppingCartHeading'>Shopping Cart</h1>
                <p className='priceHeading'>Price</p>
                <hr className='horizontalLine'/>
                {cartData.cart.map((ele)=>{return(<CartCard productInfoInCart = {{ele, addToCart,  removeFromCart, decrement}}/>)})}
                <div className="subtotalWrapper">
                    <h2>{`Subtotal(${cartLengthInCart} items):`}85,645</h2>
                </div>
            </div>
            <FilterBar/>
            </div>
        )
    }
}
