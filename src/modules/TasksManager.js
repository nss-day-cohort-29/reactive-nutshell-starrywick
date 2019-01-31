const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(e => e.json())
  },
  post(task) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }).then(data => data.json())
  },
  put(taskId, existingTask) {
    return fetch(`${remoteURL}/${taskId}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingTask)
      }).then(data => data.json());
  }
}
// I need to better understand the relationship between TasksManager and ApplicationViews.

