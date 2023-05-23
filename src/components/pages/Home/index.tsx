import { useEffect, useState } from "react"

const url = "https://api.noroff.dev/api/v1/online-shop";


function Home () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
    }
    getProducts()
  }, [])
  console.log(products)
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  )
}
export default Home