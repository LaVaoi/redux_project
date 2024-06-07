import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addUser} from '../actions/actions'

function Register() {

  const[numero,setNumero]=useState(0);
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
  const[nom,setNom]=useState('');
  const[password,setPassword]=useState('');
  const[confirmerPass,setConfirmerPass]=useState('');
  const dispatch=useDispatch();

  return (
    <div>
      <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Numero</label>
                      <input type="text" id="form3Example1c" class="form-control" onChange={(ev)=>setNumero(ev.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Nom</label>
                      <input type="email" id="form3Example3c" class="form-control" onChange={(ev)=>setNom(ev.target.value)} />
                    </div>
                  </div>


                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" onChange={(ev)=>setEmail(ev.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Address</label>
                      <input type="email" id="form3Example3c" class="form-control" onChange={(ev)=>setAddress(ev.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" class="form-control" onChange={(ev)=>setPassword(ev.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Confimer password</label>
                      <input type="password" id="form3Example4c" class="form-control" onChange={(ev)=>setConfirmerPass(ev.target.value)} />
                    </div>
                  </div>

                  {confirmerPass===password && confirmerPass!=="" ?
                   <div className='alert alert-success'>
                    The password confirmation is success
                  </div> :
                  <div className='alert alert-danger'>
                    The password confirmation is not correct
                  </div>
                  }

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    {password===confirmerPass && confirmerPass!=="" ? <button  type="button" 
                                                         data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" 
                                                         onClick={()=>dispatch(addUser(numero,nom,email,address,password))} >
                                                         Register
                                                </button>
                                              :
                                              <div className='alert alert-secondary'>
                                                Obligatorie a saisie a correct password confirmation
                                              </div>
                    }
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register
