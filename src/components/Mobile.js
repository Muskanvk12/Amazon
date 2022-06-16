import React from 'react'
import './mobile.css'
// import Data from '../Data/productsData'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'

export default function Mobile({data}) {
  let MobileData = data.Data.filter((ele) => { return ele.type === 'Mobile' });
  return (
    <div className="mobile">
      <FilterBar />
      <div className="mobileCards">
       {MobileData.map(ele => {
          return <Card details={{ele, data}} />
        })}
      </div>
    </div>
  )
}
