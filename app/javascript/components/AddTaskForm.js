import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddTaskForm() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios
      .post("/api/v1/tasks", { title, description, avatarUrl })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  };

  return (
    <form id="add-task-form" onSubmit={handleSubmit}>
      <div>
        <input
          id="title-input"
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          id="description-input"
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          id="avatar-url-input"
          type="text"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
      </div>
      <div>
        <button id="add-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm;
