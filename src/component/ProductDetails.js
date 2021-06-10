import React from 'react'
import '../Styles/ProductDetails.scss'
import component from '../Styles/SVG'

export default function ProductDetails(props){
  let data = props.data
  let Supplier = component[data.supplier.supplierName]
  let VehicleType = component[data.category.vehicleType]
  console.log(props)
  return(
    <div className="detail--container">
      {props.children}
      <div className="detail--supplier"><Supplier/></div>
      <div className="detail--specification">
        <div className="detail--supplier" >{data.supplier.supplierName}</div>
        <div className="detail--VehicleType">
          <VehicleType/>
          {data.category.vehicleType}
          <span>{data.product.maxSeats} Seats</span>

        </div>
        <div className="display-flex">
          <div>Estimated pickup time: </div>
          <div><b>{data.eta} minutes</b></div>
        </div>
        <div className="display-flex">
          <div>Estimated price: </div>
          <div><b>{data.price.amount} {data.price.currency}</b></div>
        </div>
        <div className="display-flex">
          <div>Maximum Bags: </div>
          <div><b>{data.product.bags.max} Bag</b></div>
        </div>
        <div className="detail--package">Large: {data.product.bags.large}   Small: {data.product.bags.small}</div>
        <div className="detail--review">{data.category.subCategory}</div>
      </div>

    </div>
  )
}