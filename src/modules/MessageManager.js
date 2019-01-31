const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/messages`).then(e => e.json())
  },
  post(message) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    }).then(data => data.json())
  },
  getMessageData() {
    return fetch("http://localhost:8088/messages?_expand=user")
    .then(response => response.json())
},
}