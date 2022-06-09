import React from 'react'
import './content.css'
import FilterBar from './FilterBar'
import ProductList from './ProductList'

export default function Content() {
  return (
    <div className='content'>
        <FilterBar/>
        <ProductList/>
    </div>
  )
}
