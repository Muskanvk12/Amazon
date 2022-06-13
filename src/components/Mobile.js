import React from 'react'
import './mobile.css'
import Data from '../Data/productsData'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'

export default function Mobile() {
  let MobileData = Data.filter((ele) => { return ele.type === 'Mobile' });
  console.log(MobileData)
  return (
    <div className="mobile">
      <FilterBar />
      <div className="mobileCards">
       {MobileData.map(ele => {
          return <Card details={ele} />
        })}
      </div>
    </div>
  )
}
