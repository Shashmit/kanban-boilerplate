const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todolane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.innerText = value;
  newTask.setAttribute("draggable", "true");
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });
  input.value = "";

  todolane.appendChild(newTask);
});
