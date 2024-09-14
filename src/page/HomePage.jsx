import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const HomePage = () => {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <Link to={"/product"} >Product</Link>
      <button onClick={notify}>notify</button>
    </div>
  )
}

export default HomePage