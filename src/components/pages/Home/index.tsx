import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePrice from '../../../features/price/setPrice'
import setPrice from '../../../features/price/setPrice'

const url = 'https://api.noroff.dev/api/v1/online-shop'

function Home() {
  const [posts, setPosts] = useState<any>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function getData() {
      const response = await fetch(url)
      const json = await response.json()
      setPosts(json)
    }
    getData()
  }, [])

  return (
    <div>
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
    </div>
  )
}
export default Home
