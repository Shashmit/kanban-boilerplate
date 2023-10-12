const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("is-dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("is-dragging");
  });
});

droppables.forEach((droppable) => {
  droppable.addEventListener("dragover", (e) => {
    e.preventDefault();
    const bottomTask = insertAboveTask(droppable, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    bottomTask
      ? droppable.insertBefore(curTask, bottomTask)
      : droppable.appendChild(curTask);
  });
});

const insertAboveTask = (droppable, y) => {
  const tasks = [...droppable.querySelectorAll(".task:not(.is-dragging)")];

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  tasks.forEach((task) => {
    const { top } = task.getBoundingClientRect(); // top of task
    const offset = y - top; // distance from top of task to mouse
    if (offset < 0 && offset > closestOffset) {
      // if mouse is above task and closest to task
      closestTask = task;
      closestOffset = offset;
    }
  });
  return closestTask;
};
