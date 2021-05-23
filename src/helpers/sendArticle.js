import {db} from "../lib/firebase-prod"

export function sendArticle(photoURL, title, description, content, name) {
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }

  console.log("Send Article")

  // Checking that the fields are not empty
  if(photoURL.length > 3 && title.length > 3 && description.length > 3 && content.length > 3 && name.length > 3) {
    db.collection("content").add({
      type: "article",
      photoURL: photoURL,
      title: title,
      description: description,
      content: content,
      name: name,
      time: new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/'),
      fullDate: new Date(),
      uui: uuidv4(),
      path: uuidv4(),
    })
  }

}
