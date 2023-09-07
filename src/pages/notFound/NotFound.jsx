import React from 'react'
import './notFound.css'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <section>
      <div className="container notFound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NotFound