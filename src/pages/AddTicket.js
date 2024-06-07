import React, { useState } from 'react'

function AddTicket() {
  const [id,setId]=useState('');
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [email,setEmail]=useState('');
  const [utilisateurs,setUtilisateurs]=useState([]);
  const handleCreate=()=>{
    setUtilisateurs([...utilisateurs,{id,nom,prenom,email}])
    setId('')
    setNom('')
    setPrenom('')
    setEmail('')
  }
  return (
    <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Id :</label>
        <input value={id} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(ev)=>setId(ev.target.value)}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Nom :</label>
        <input value={nom} type="text" class="form-control" id="exampleInputPassword1" onChange={(ev)=>setNom(ev.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Prenom :</label>
        <input value={prenom} type="text" class="form-control" id="exampleInputPassword1" onChange={(ev)=>setPrenom(ev.target.value)}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email :</label>
        <input value={email} type="email" class="form-control" id="exampleInputPassword1" onChange={(ev)=>setEmail(ev.target.value)}/>
      </div>
      <button type="button" onClick={handleCreate} class="btn btn-primary">Submit</button>
    </form>
    <h1>Liste Utilisateurs</h1>
    {utilisateurs.map((uti,index)=>{
      return(
        <ul key={index}>
          <li>Id :{uti.id}</li>
          <li>Nom :{uti.nom}</li>
          <li>Prenom :{uti.prenom}</li>
          <li>Email :{uti.email}</li>
        </ul>

      )
    })}
      
    </div>
  )
}

export default AddTicket
