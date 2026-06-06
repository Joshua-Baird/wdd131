const form = document.querySelector("#eventForm");
const output = document.querySelector("#output");
const typeSelect = document.querySelector("#type");
const studentIdField = document.querySelector("#studentIdField");
const eventCodeField = document.querySelector("#eventCodeField");

function updateNotesField() {
  type = typeSelect.value;
  if (type === "student") {
    form.studentId.required = true;
    studentIdField.hidden = false;
    form.eventCode.required = false;
    eventCodeField.hidden = true;
  } else if (type === "guest") {
    form.studentId.required = false;
    studentIdField.hidden = true;
    form.eventCode.required = true;
    eventCodeField.hidden = false;
  } else {
    form.studentId.required = false;
    studentIdField.hidden = true;
    form.eventCode.required = false;
    eventCodeField.hidden = true;
  }
}
typeSelect.addEventListener("change", updateNotesField);

form.addEventListener("submit", function (event) {
  console.log("create ticket");
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const eventCode = form.eventCode.value.trim();
  const studentId = form.studentId.value.trim();
  const date = form.date.value;

  // Validate the input
  // Let the user know if they choose student but didn't put a student ID that they need to add a student ID
  if (type === "student" && !studentId) {
    output.textContent = "please enter your student ID number.";
    return;
  }

  // Let the user know the student I# needs to be 9 digits long and only contain numbers
  if (type === "student" && studentId.length !== 9) {
    output.textContent = "Please enter a valid student ID number. (9 digits long)";
    return;
  }

  // Let the user know if they choose guest but didn't put an event code that they need to add an event code
  if (type === "guest" && !eventCode) {
    output.textContent = "Please enter the event code.";
    return;
  }

  // Let the user know if they choose guest but put in the wrong event code that they need to enter the correct event code
  if (type === "guest" && eventCode !== "EVENT131") {
    output.textContent = "Invalid event code. Please enter the correct event code.";
    return;
  }


  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>Date: ${date}</p>
  `;

  form.reset();
  updateNotesField();
});
