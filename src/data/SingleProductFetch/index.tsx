import { useState, useEffect } from 'react'

const url = 'https://api.noroff.dev/api/v1/online-shop'

export function SingleProductFetch(id: string) {
  const [product, setProduct] = useState<any>([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])

  return product
}
