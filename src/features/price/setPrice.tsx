function setPrice(product: { price: number; discountedPrice: number }) {
  if (product.price != product.discountedPrice) {
    let finalPrice = product.price - product.discountedPrice
    finalPrice = finalPrice/product.price*100
    finalPrice = Math.round(finalPrice)
    return <p>price: {product.discountedPrice} you save {finalPrice}%</p>
  } else {
    return <p>price: {product.discountedPrice}</p>
  }
}

export default setPrice
