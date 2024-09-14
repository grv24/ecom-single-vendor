import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to={"/product"} >Product</Link>
    </div>
  )
}

export default HomePage