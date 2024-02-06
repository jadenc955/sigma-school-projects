const tasks = [];

function addTask() {
  const task = prompt("Enter a new task:");

  if (task) {
    tasks.push(task);
    alert("Task added!");
  } else {
    alert("Please add a task!");
  }
}

function viewTasks() {
  let taskList = "Tasks:\n";
  for (const task of tasks) {
    taskList += `- ${task}\n`;
  }

  alert(taskList);
}