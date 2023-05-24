import { log } from 'console'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const url = 'https://api.noroff.dev/api/v1/online-shop'

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])

  function addToCart() {
    console.log('add to cart')
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <button onClick={addToCart}>add to cart</button>
    </div>
  )
}

export default ProductPage
