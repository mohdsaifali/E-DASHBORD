import React, { useState } from 'react'

function UpdateProduct () {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState(false)

  const addProduct = async () => {
    console.log(name,price,category,company)
    if (!name || !price || !category || !company) {
      setError(true)
      return false;
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)

  }
  return (
    <div className='product'><h1> Update Product </h1>
      <input className="inputBox" type="text" placeholder='Enter Product Name'
        value={name} onChange={(e) => { setName(e.target.value) }}
      />
        {error && !name && <span className='invalid-input'> Enter Valid Name</span>}

      <input className="inputBox" type="text" placeholder='Enter Product Price'
        value={price} onChange={(e) => { setPrice(e.target.value) }}
      />
        {error &&!price && <span className='invalid-input'> Enter Valid Price</span>}

      <input className="inputBox" type="text" placeholder='Enter Product Category'
        value={category} onChange={(e) => { setCategory(e.target.value) }}
      />
        {error && !category && <span className='invalid-input'> Enter Valid Category Name</span>}

      <input className="inputBox" type="text" placeholder='Enter Product Company'
        value={company} onChange={(e) => { setCompany(e.target.value) }}
      />
        {error && !company &&<span className='invalid-input'> Enter Valid Company Name</span>}

      <button onClick={addProduct} className="addButton" type='button'> Update Product</button>
    </div>
  )
}

export default UpdateProduct
