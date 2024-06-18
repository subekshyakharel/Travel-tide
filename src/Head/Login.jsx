import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="container login mt-5">
        <div className="wrapper">
            <h3 className='text-center'>Login to Travellers</h3> <hr />
            <form action="">
                <div>
                <label htmlFor="">Email</label>
                <input className='form-control' type="email" placeholder='' />
                </div>

                <div>
                <label htmlFor="">Password</label>
                <input className='form-control' type="password" />
                </div>

                <div className='pt-3 pb-3'>
                <input type="checkbox" /> <label>Remember me</label>
                </div>
                <button  className='btn btn-danger w-100'>Log in</button>
                <hr />

                <div className='text-center text'>
                    <p><Link to={``} >Forget your password?</Link></p>
                    <p>Don't have an account yet?<span><Link to={``} >Register Now!</Link> </span></p>
                    
                </div>

            </form>
        </div>
      </div>
    </>
  )
}

export default Login
