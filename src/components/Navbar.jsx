import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({cartItems}) {
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark rounded">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/cart' className="nav-link active" aria-current="page">
                <i className="bi bi-cart"></i> Cart ({cartItems.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
