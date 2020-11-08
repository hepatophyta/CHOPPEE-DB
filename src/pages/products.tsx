import React, { FC } from 'react'
import { Sidebar } from '../components/Sidebar'

interface IProductHeader {
  children: any
}

const ProductHeader: FC<IProductHeader> = ({ children }) => {
  return (
    <table className="table" style={{ width: '100%' }}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">PRODUCT</th>
          <th scope="col">IN-STOCK</th>
          <th scope="col">PRICE</th>
          <th scope="col">SALES</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

const ProductRow: FC<{}> = () => {
  return (
    <tr>
      <th scope="row" className="align-middle">356121</th>
      <td className="align-middle"><img src="pic/product1.jpg" className="product-pic"/> Bathing Shampoo</td>
      <td className="align-middle">451</td>
      <td className="align-middle">$654</td>
      <td className="align-middle">822</td>
      <td className="align-middle"><button className="btn btn-outline-secondary">Order</button></td>
    </tr>
  )
}

const ProductTable = () => {
  return (
    <div className="row m-4">
      <div className="col content-element shadow">
        <div className="m-4">
          <nav className="navbar navbar-expand-lg navbar-light">
            <p className="mb-0 font-weight-bolder h2">Products</p>
            <div className="ml-auto">
            <button className="btn rounded-pill mr-2 btn-order-table">Filter</button>
            <button className="btn rounded-pill btn-order-table" >+Add New</button>
            </div>
          </nav>
        </div>
        <div className="m-4">
          <ProductHeader>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
            <ProductRow></ProductRow>
          </ProductHeader>
        </div>
      </div>
    </div>
  )
}

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