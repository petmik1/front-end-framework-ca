import { useEffect, useState } from 'react'


const url = 'https://api.noroff.dev/api/v1/online-shop'

export function CartTotal(id:string, quantity:number, totalMap:Map<string, number>)  {
  const [product, setProduct] = useState<any>([])
  let total = 0

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])
    const newTotal = product.discountedPrice * quantity
    totalMap.set(id, newTotal)
    total = total + newTotal
  return total
  
}
