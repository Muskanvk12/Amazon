import React from 'react'
import ProductCard from './ProductCard'
import inEarBluetooth from '../Data/headphoneInEar'

export default function ProductList() {
    return inEarBluetooth.map((inEarBth)=>{
        return (
            <div>
                <ProductCard details = {inEarBth}/>
            </div>
          )
    })
  
}
