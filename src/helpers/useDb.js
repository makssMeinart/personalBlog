import { useEffect, useState, useContext } from "react"
import { FirebaseContext } from "../context/firebase"

export default function useContent(target) {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(target)
      .orderBy("fullDate", "desc")
      .onSnapshot((snapshot) =>
        setContent(snapshot.docs.map((doc) => doc.data()))
      )

    return () => {
      unsubscribe()
    }
  }, [])

  return { [target]: content }
}
