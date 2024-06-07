import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../actions/actions';
import { Link } from 'react-router-dom';

function HistoTicket() {
  
  const users=useSelector(state=>state.users);
  const dispatch=useDispatch()
  return (
    <div>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Numero</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>{return (
      <tr key={index}>
      <th scope="row">{user.numero}</th>
      <td>{user.nom}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>
      <button class="btn btn-outline-danger" type="submit" onClick={()=>dispatch(deleteUser(user.numero))}>Delete</button>
      <Link to={`update/${user.numero}`}>
      <button class="btn btn-outline-primary" type="submit">Edit</button>
      </Link>
      </td>
    </tr>
    )})}
    
  </tbody>
</table>
    </div>
  )
}

export default HistoTicket
