import { useParams } from "react-router-dom";

function ProductPage() {
  let { id } = useParams();

  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  )
}

export default ProductPage
