import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/home'>Manangement Ticket</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <Link class="nav-link active" to='/addTicket' aria-current="page" href="#">Add new ticket</Link>
          <Link class="nav-link" to='/histoTicket' href="#"><strong> Historique </strong></Link>
          <Link class="nav-link" to='/rechercher' href="#"><strong> Recherche </strong></Link>
      </ul>
      <form class="d-flex">
        <Link to='/login'>
        <button class="btn btn-outline-success" type="submit">Login</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
  )
}
