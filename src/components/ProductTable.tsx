import React, { FC, useState, useEffect } from 'react'
import Axios from 'axios'

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

interface IProduct {
  id: number
  title: string
  image: string
  price: number
}

const ProductRow: FC<IProduct> = ({ id, title, image, price }) => {
  const productClicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // logic
    console.log(e)
    console.log(`product id ${id} clicked`)
  }

  return (
    <tr>
      <th scope="row" className="align-middle">{id}</th>
      <td className="align-middle">
        <img src={image} className="product-pic"/> 
        {title}
      </td>
      <td className="align-middle">451</td>
      <td className="align-middle">${price}</td>
      <td className="align-middle">822</td>
      <td className="align-middle">
        <button 
          className="btn btn-outline-secondary"
          onClick={productClicked}
        >
          Order
        </button>
      </td>
    </tr>
  )
}

export const ProductTable = () => {
  const [products, setProduct] = useState<IProduct[]>([])

  useEffect(() => {
    (async () => {
      const response = await Axios.get<IProduct[]>('https://fakestoreapi.com/products')

      setProduct(response.data)
    })()
  }, [])

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
            {products.map(product => <ProductRow key={product.id} {...product} />)}
          </ProductHeader>
        </div>
      </div>
    </div>
  )
}
