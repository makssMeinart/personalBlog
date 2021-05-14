import React, { useContext } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "normalize.css"
import "./app.css"
import { firebase, db, auth, provider } from "./lib/firebase-prod"
import { FirebaseContext } from "./context/firebase"



ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{
      firebase,
      db,
      auth,
      provider
    }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
