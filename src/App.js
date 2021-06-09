import data from './asset/availability.json'
import React from 'react'
import './App.scss';

import Layout from "./component/Layout"
import ProductCard from './component/ProductCard'

export default function App() {
  console.log(data, "App")
  let sortedData = data.sort((a, b) => (a.eta > b.eta) ? 1 : -1);
  return (
    <div>
      <Layout />
      <div className="card--container">
        { (sortedData)?  sortedData.map((product) =>{
            return(
              <ProductCard key={product.availabilityId} data={product} />
            )
          }): ''
        }
      </div>
      
    </div>
  );
}

