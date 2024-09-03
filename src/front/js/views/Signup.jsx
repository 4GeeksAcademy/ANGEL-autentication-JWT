import React, { useContext } from "react";
import { Context } from "../store/appContext";

export default function SignUp(){

  const { actions } = useContext(Context)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { elements } =  event.currentTarget

    const userData = {
      name: elements.namedItem('name').value,
      email: elements.namedItem('email').value,
      password: elements.namedItem('password').value,
    }
    actions.registerFetch(userData)
  }


  return(
    <form onSubmit={handleSubmit}>
      <label>
        <input required placeholder="Name" name="name"></input>
      </label>
      <label>
        <input required placeholder="Email" name="email"></input>
      </label>
      <label>
        <input required placeholder="Password" name="password"></input>
      </label>
      <button>Register</button>
    </form>
  )
}