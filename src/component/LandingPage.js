import data from './asset/availability.json'
import React, {useState, useEffect} from 'react'
import './Styles/App.scss';

import Layout from './component/Layout'
import ProductCard from './component/ProductCard'
import ProductDetails from './component/ProductDetails'

export default function App() {
  let sorted = data.sort((a, b) => (a.eta > b.eta) ? 1 : -1);
  const [sortedData, setsortedData] = useState(sorted) // Data variable
  const [sortKey, setsortKey] = useState("eta") // According to the key the data will be sorted.
  const [sortValue, setsortValue] = useState("Estimated Time") // The value will be display in the UI for sort option
  const [dropdownHeight, setdropdownHeight] = useState("0px") // To oprn and close the dropdown
  const [overlay, setoverlay] = useState("none") // To open and close the details page.
  const [productDetails, setproductDetails] = useState(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [])

  function handleClickOutside(e){
    console.log(e.target.parentElement.classList )
    if(e.target.parentElement.classList !== null && !e.target.parentElement.classList.contains("sort--options")){
      setdropdownHeight("0px")
    }
  }

  function dropdown(){
    if(dropdownHeight === '209px'){
      setdropdownHeight('0px')
    } else setdropdownHeight('209px')
  }

  // Sorting functionality. When the sortkey state change the function will be initiated.
  useEffect(() => {
    let sorting = []
    setdropdownHeight('0px')
    switch(sortKey){
      case "FREENOW":
        setsortValue("FREENOW")
        sorting = data.filter(function(value){
          return value.supplier.supplierName === sortKey
        })
        break;
      case "Bolt":
        setsortValue("Bolt")
        sorting = data.filter(function(value){
          return value.supplier.supplierName === "Bolt"
        })
        break;
      case "MOST_POPULAR":
        setsortValue("Most Popular")
        sorting = data.filter(function(value){
          return value.category.subCategory === "MOST_POPULAR"
        })
        break;
      case "HIGHLY_RECOMMENDED":
        setsortValue("Highly Recommended")
        sorting = data.filter(function(value){
          return value.category.subCategory === "HIGHLY_RECOMMENDED"
        })
        break;
      default:
        console.log("Default")
        sorting = data.sort((a, b) => (a.eta > b.eta) ? 1 : -1);
        setsortValue("Estimated Time")
    }
    setsortedData(sorting)
  }, [sortKey])

  function DetailsOverlay(product){
    setoverlay("block")
    setproductDetails(product)
  }


  return (
    <div className="app--container">
      <Layout />
      <div className="sorting">
        <div className="display-flex sort--input_container">
          <div>Sort: </div>
          <div className="sort--input cursor-pointer" onClick={dropdown}>{sortValue}</div>
        </div>
        
        <div className="sort--options cursor-pointer" style={{height: dropdownHeight}}>
          <div className={(sortKey === "FREENOW")? 'active': ''} onClick={()=>setsortKey("FREENOW")}>FREENOW</div>
          <div className={(sortKey === "Bolt")? 'active': ''} onClick={()=>setsortKey("Bolt")}>Bolt</div>
          <div className={(sortKey === "MOST_POPULAR")? 'active': ''} onClick={()=>setsortKey("MOST_POPULAR")}>Most Popular</div>
          <div className={(sortKey === "HIGHLY_RECOMMENDED")? 'active': ''} onClick={()=>setsortKey("HIGHLY_RECOMMENDED")}>Highly Recommended</div>
          <div className={(sortKey === "eta")? 'active': ''} onClick={()=>setsortKey("eta")}>Estimated Time</div>
        </div>
      </div>
      <div className="card--container">
        { (sortedData)?  sortedData.map((product) =>{
            return(
              <div key={product.availabilityId} onClick={()=> DetailsOverlay(product)}>
                <ProductCard  data={product}  />
              </div>
            )
          }): ''
        }
      </div>
      {
        (productDetails !== null) && (
          <div className="card--details cursor-pointer" style={{display: overlay}}>
            
            <ProductDetails  data={productDetails}>
              <span className="close--button" onClick={()=> setoverlay("none")}>+</span>
            </ProductDetails>
          </div>
        )
      }
    </div>
  );
}
