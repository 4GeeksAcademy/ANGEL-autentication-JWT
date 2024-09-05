import React, { useContext, useRef } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"
import { toast, Toaster } from 'sonner'


export default function SignUp(){

  const { actions } = useContext(Context)
  const navigate = useNavigate()
  const emailRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { elements } =  event.currentTarget

    const userData = {
      name: elements.namedItem('name').value,
      email: elements.namedItem('email').value,
      password: elements.namedItem('password').value,
    }
    actions.registerFetch(userData)
      .then((data) => {
        if(data && !data.error){
          navigate('/login')
        }
      })
      .catch((error) => {
        toast.error(error.message)
        emailRef.current.value = ''
      })
  }

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  return(
    <>
      <Toaster position="bottom-center"/>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label>
            <input required placeholder="Name" name="name"></input>
          </label>
          <label>
            <input required placeholder="Email" name="email" ref={emailRef}></input>
          </label>
          <label>
            <input required placeholder="Password" name="password"></input>
          </label>
          <button>Register</button>
        </form>
        <p>Already have an account? <a onClick={handleLoginRedirect}>Login</a></p>
      </div>
    </>
  )
}