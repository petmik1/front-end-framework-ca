import { useEffect, useState } from 'react'

type CartTotalProps = {
  id: string
  quantity: number
}

const url = 'https://api.noroff.dev/api/v1/online-shop'

export function CartTotal({ id, quantity }: CartTotalProps) {
  const [product, setProduct] = useState<any>([])
  let price = 0;

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])
    price = product.discountedPrice * quantity
  return (
    <h2>Total: {price}</h2>
  )
}
