import { useState, useEffect } from 'react'

const url = 'https://api.noroff.dev/api/v1/online-shop'



export function AllProductFetch() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [products, setProducts] = useState<any>([])

  useEffect(() => {

    async function getData() {
      const response = await fetch(url)
      const json = await response.json()
      setProducts(json)
    }
    getData()
  }, [])
  console.log(products)
  return products
}