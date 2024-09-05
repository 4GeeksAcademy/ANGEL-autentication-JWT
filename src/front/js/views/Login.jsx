import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from 'sonner'


export default function Login(){

  const { actions } = useContext(Context)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const { elements } =  event.currentTarget
    
    const userData = {
      email: elements.namedItem('email').value,
      password: elements.namedItem('password').value
    }
    actions.loginFetch(userData)
      .then((data) => {
        if(data && !data.error){
          navigate('/private')
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }
  const handleSignupRedirect = () => {
    navigate('/signup')
  }

  return(
    <>
      <Toaster position="bottom-center"/>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label>
            <input placeholder="Email" name="email"></input>
          </label>
          <label>
            <input placeholder="Password" name="password"></input>
          </label>
          <button>Login</button>
        </form>
        <p>Don't have an account? <a onClick={handleSignupRedirect}>Sign up</a></p>
      </div>
    </>
  )
}