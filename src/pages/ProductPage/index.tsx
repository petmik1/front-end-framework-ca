import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import setPrice from '../../features/price/setPrice'
import { useShoppingCart } from '../../context/ShoppingCartContext'


const url = 'https://api.noroff.dev/api/v1/online-shop'

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>([])
  const { increaseQuantity } = useShoppingCart()

  useEffect(() => {
    async function getData() {
      const response = await fetch(url + '/' + id)
      const json = await response.json()
      setProduct(json)
    }
    getData()
  }, [])

  // function addToCart() {

  // }

  function renderReviews() {
    if (product.reviews !== 0) {
      return (
        <div>
          <h3>reviews</h3>
          <ul>
            {product.reviews &&
              product.reviews.map(
                (review: {
                  id: string
                  username: string
                  rating: number
                  description: string
                }) => (
                  <li key={review.id}>
                    {review.username} {review.rating}/5 {review.description}
                  </li>
                )
              )}
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <div>{renderReviews()}</div>
      {setPrice(product)}
      <button onClick={() => increaseQuantity(product.id)}>add to cart</button>
    </div>
  )
}

export default ProductPage
