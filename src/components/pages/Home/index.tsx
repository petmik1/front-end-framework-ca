import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const url = 'https://api.noroff.dev/api/v1/online-shop'

function Home() {
  const [posts, setPosts] = useState<any>([])

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
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <p>rating: {post.rating}</p>
          <img src={post.imageUrl} alt={post.title} />
          <Link to={`/product/${post.id}`}>
            <button>View product</button>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Home
