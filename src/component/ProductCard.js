import '../Styles/ProductCard.scss'
import component from '../Styles/SVG'

export default function ProductCard(props){
  let data = props.data
  let Supplier = component[data.supplier.supplierName]
  let VehicleType = component[data.category.vehicleType]
  return(
    <div className="card--block">
      <div className="card--supplier"><Supplier/></div>
      <div>
        <div className="card--supplier" >{data.supplier.supplierName}</div>
        <div className="card--VehicleType">
          <VehicleType/>
          {data.category.vehicleType}
          <span>{data.product.maxSeats} Seats</span>
        </div>
        <div>Estimated pickup time <b>{data.eta} min</b></div>
        <div>Estimated price <b>{data.price.amount} {data.price.currency}</b></div>
      </div>
      
    </div>
  )
}