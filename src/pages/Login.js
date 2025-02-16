import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Login() {
  const [numero,setNumero]=useState(0);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const [sucees,setSucees]=useState('');
  const [error,setError]=useState('');
  const myUsers=useSelector(state=>state.users)
  const myUser=myUsers.find(user=>user.numero===numero)
  function handleLogin(){
    if(numero===myUser.numero && email===myUser.email && password===myUser.password){
      setSucees('loggin succeed');
    }else{
      setError('not logged in the login');
    }
  }
  return (
    <div>
      { sucees && <div class="alert alert-success" role="alert">
        {sucees}
      </div>}
      { error &&
      <div class="alert alert-danger" role="alert">
      {error}
      </div>
      }
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Numero</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" onChange={(event)=>setNumero(event.target.value)} />
          </div>
          <div data-mdb-input-init class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address"  onChange={(event)=>setEmail(event.target.value)}/>
          </div>

          <div data-mdb-input-init class="form-outline mb-3">
          <label class="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)} />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
              style={{paddingLeft: 2.5 , paddingRight: 2.5 }} onClick={handleLogin}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/register'
                class="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login
