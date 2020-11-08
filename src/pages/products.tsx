import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { ProductTable } from '../components/ProductTable'

const Products = () => {
  return (
    <>
      <Sidebar />
      <div className="container-fluid">
        <ProductTable />
      </div>
    </>
  )
}

export default Products