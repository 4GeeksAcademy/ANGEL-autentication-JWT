import React, { useContext } from "react";
import { Context } from "../store/appContext";

export default function Login(){

  const { store } = useContext(Context)

  const handleSubmit = (event) => {
    event.preventDefault()

    const { elements } =  event.currentTarget
    const userData = elements.namedItem('item')
    console.log(userData)
  }


  return(
    <form onSubmit={handleSubmit}>
      <label>
        <input placeholder="Name" name="item"></input>
      </label>
      <label>
        <input placeholder="Email" name="item"></input>
      </label>
      <label>
        <input placeholder="Password" name="item"></input>
      </label>
    </form>
  )
}