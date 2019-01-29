const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/events`).then(e => e.json());
  },
  put(eventId, existingevent) {
    return fetch(`${remoteURL}/events/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingevent)
    }).then(data => data.json());
  }
};