
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});

// -------------------- TO-DO LIST --------------------
document.getElementById("addTaskBtn").addEventListener("click", function() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    let li = document.createElement("li");
    li.textContent = taskValue;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function() {
      li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});