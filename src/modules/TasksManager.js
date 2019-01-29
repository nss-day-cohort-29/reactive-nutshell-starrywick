const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(e => e.json());
  },
  put(taskId, existingTask) {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingTask)
    }).then(e => e.json());
  },
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(e => e.json());
  },
  delete(taskId) {
    return fetch(`${remoteURL}/tasks`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`${remoteURL}/tasks/${taskId}`))
    .then(e => e.json())
    // .then(tasks => this.state({
    //     tasks: tasks
    //   })
  }
}

