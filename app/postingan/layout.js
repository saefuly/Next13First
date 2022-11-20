import Link from "next/link"

async function getProduct() {
  let products = await fetch("https://dummyjson.com/products?limit=5")
  return products.json()
}

export default async function Layout({children}) {
  const { products } = await getProduct()
  // console.log(products)
  return (
    <div style={{flexDirection:"row", display:"flex"}}>
      <div>
        {
          products.map((product) => (
          <div key={product.id} style={{flex:1}}>
            <Link href={`/postingan/${product.id}`}>
              <h4>Series {product.id}</h4>
            </Link>
            <h3>Model {product.title}</h3>
            <p>{product.description}</p>
          </div>
          ))
        }
      </div>
      <div style={{flex:2}}>
        <h2>Detail Product</h2>
        <>
          {children}
        </>
      </div>
    </div>
  )
}