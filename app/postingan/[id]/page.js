async function getDetails(id) {
  let details = await fetch(`https://dummyjson.com/products/${id}`)
  return details.json()
}

export default async function Page({ params }) {
  const detail = await getDetails(params.id)
  return (
    <div>
      <img src={detail.images[0]} style={{width:150}} />
      <p>Merk: {detail.brand}</p>
      <p>Seri: {detail.title}</p>
      <p>Kategori: {detail.category}</p>
      <p>Rating: {detail.rating}</p>
      <p>Stock: {detail.stock}</p>
      <p>Harga: {detail.price}</p>
      <p>Deskripsi: {detail.description}</p>
    </div>
  )
}