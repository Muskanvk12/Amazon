import React from 'react'
import './cartCard.css'

export default function CartCard({ productInfoInCart }) {
    let addToCart = productInfoInCart.addToCart
    let  removeFromCart = productInfoInCart.removeFromCart
    let decrement = productInfoInCart.decrement
    return (
        <>
            <div className='cartCardWrapper'>
                <div className="cartImgWrapper cursor"><img className='productInCartImage' src={`${productInfoInCart.ele.image}`} alt="" /></div>
                <div className="cartProductInfoWrapper">
                    <div className="cartProductHeading cursor">{productInfoInCart.ele.title}</div>
                    <div className="inStock">In stock</div>
                    <div className="freeDelivery">Eligible for FREE Shipping</div>
                    <div className="fulfilled"><img src='/images/fulfilled.png' alt="" /></div>
                    <div className="giftOrNot"><span><input type="checkbox" name="gift" id="gift" /></span> This will be a gift <span><span className='learnMore specialText'>Learn more</span></span></div>
                    <div className="quantityDeleteSave">
                        <div className="quantityMeter">
                            <button className="quantityIncDecBtn cursor" onClick={()=>decrement(productInfoInCart.ele)}>-</button>
                            <p>Qty: {productInfoInCart.ele.quantity}</p>
                            <button className="quantityIncDecBtn cursor" onClick={() => { addToCart(productInfoInCart.ele) }}>+</button>
                        </div>
                        <hr className='verticalLine' />

                        <p className='delSaveBtn cursor specialText' onClick={()=>{ removeFromCart(productInfoInCart.ele)}}>Delete</p>
                        <hr className='verticalLine' />

                        <p className='delSaveBtn cursor specialText'>Save for later</p>
                        <hr className='verticalLine' />

                    </div>
                    <div className="seeMore cursor specialText"><p>see more like this</p></div>
                </div>
                <div className="productPriceInCart">{productInfoInCart.ele.price}</div>
            </div>
            <hr className='horizontalLine' />
        </>
    )
}
