import React from 'react'
import './productList.css'
import ProductCard from './ProductCard'
import inEarBluetooth from '../Data/headphoneInEar'

export default function ProductList() {
    return (<div className="productList">
        {inEarBluetooth.map((inEarBth) => {
            return (
                <ProductCard details={inEarBth} />
            )
        })}
        </div>
    )

}
