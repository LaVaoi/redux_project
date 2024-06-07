import React from 'react'

function Machine(props) {
    const{id,ref,marque,prix,description}=props.machines;
  return (
    <div>
      <p>{id}</p>
      <p>{ref}</p>
      <p>{marque}</p>
      <p>{prix}</p>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

export default Machine
