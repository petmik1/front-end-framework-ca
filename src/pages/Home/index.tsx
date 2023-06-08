import { Link } from 'react-router-dom'
import setPrice from '../../features/price/setPrice'
import * as S from './index.styles'
import { AllProductFetch } from '../../data/AllProductFetch'
import { useState } from 'react'

function Home() {
  const [query, setQuery] = useState('')
  const posts = AllProductFetch()

  return (
    <S.HomeContainer>
      <input
        type="text"
        placeholder="search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="posts">
        {posts
          .filter((post: { title: string }) =>
            post.title.toLowerCase().includes(query.toLowerCase())
          )
          .map(
            (post: {
              id: string
              title: string
              description: string
              price: number
              discountedPrice: number
              rating: number
              imageUrl: string
            }) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                {setPrice(post)}
                <p>rating: {post.rating}</p>
                <img src={post.imageUrl} alt={post.title} />
                <Link to={`/product/${post.id}`}>
                  <button>View product</button>
                </Link>
              </div>
            )
          )}
      </div>
    </S.HomeContainer>
  )
}
export default Home
