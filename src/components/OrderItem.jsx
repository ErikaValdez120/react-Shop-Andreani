import React from 'react'
import AppContext from '../context/AppContext'
import '../styles/OrderItem.scss'
import close from '../assets/icons/icon_close.png'
import { useContext } from 'react'

const OrderItem = (props) => {
  const { product, indexValue } = props
  const { removeFromCart } = React.useContext(AppContext)
  const handleRemove = (index) => {
    removeFromCart(index)
  }
  /*
  const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext)
  const handleRemove = (product) => {
    removeFromCart(product)
  }
  */
  return (
    <div className='OrderItem'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt='close' onClick={() => handleRemove(indexValue)} />
    </div>
  )
}

export default OrderItem
