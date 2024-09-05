import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export default function Private(){

  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const data = JSON.parse(localStorage.getItem('userDataLogin'))

  const handleClickMessage = () => {
    console.log(data.access_token)
    actions.getMessage(data.access_token)
  }
  const handleClickClearLocaleStorage = () => {
    localStorage.clear()
    navigate('/login')
  }

  return(
    <>
      <div className="private-div">
        <h1>{`Bienvenido: ${data.name}`}</h1>
        <button onClick={handleClickMessage}>Mostrar mensaje</button>
        {store.messageFromToken && <h3>{store.messageFromToken}</h3>}
      </div>
      <div className="private-button">
        <button onClick={handleClickClearLocaleStorage}>Log out</button>
      </div>
    </>
  )
}