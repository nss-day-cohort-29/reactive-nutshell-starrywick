const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles`).then(e => e.json())
  },
  post(article) {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    }).then(data => data.json())
  }
}