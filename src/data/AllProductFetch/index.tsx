import { useState, useEffect } from 'react'

const url = 'https://api.noroff.dev/api/v1/online-shop'

export function AllProductFetch() {
    const [products, setProducts] = useState<any>([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const json = await response.json()
      setProducts(json)
    }
    getData()
  }, [])

  return products
}