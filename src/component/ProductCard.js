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
        <div className="card--VehicleType">
          <VehicleType/>
          {data.category.vehicleType}
        </div>
        <div>{data.eta}</div>
        <div>{data.price.amount} {data.price.currency}</div>
      </div>
      
    </div>
  )
}