import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

const API = 'https://api.escuelajs.co/api/v1/products'

const useGetProducts = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = useCallback(async () => {
    const response = await axios(API)
    setProducts(response.data)
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return products
}

export default useGetProducts
