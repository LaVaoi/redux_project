import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function RechercherUser() {
    const [idUser,setIdUser]=useState('')
    const Myuser=useSelector(state=>state.users.find((us)=>us.id===idUser))
    const [utilisateurs,setUtilisateurs]=useState([])
    const handleSearch=()=>{
        setUtilisateurs(Myuser)
    }
  return (
    <div>
        <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Chercher par Id :</label>
        <input type="text" class="form-control" id="exampleInputEmail1"  onChange={(ev)=>setIdUser(ev.target.value)}/>
      </div>
      <button type="button" onClick={handleSearch} class="btn btn-primary">Chercher</button>
      {utilisateurs.map((uti,index)=>{
      return(
        <ul key={index}>
          <li>Nom :{uti.nom}</li>
          <li>Prenom :{uti.prenom}</li>
          <li>Email :{uti.email}</li>
        </ul>

      )
    })}
      </form>
      
    </div>
  )
}

export default RechercherUser
