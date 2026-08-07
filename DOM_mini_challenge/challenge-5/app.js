const empId = document.querySelector("#empId");
const empName = document.querySelector("#empName");
const empAge = document.querySelector("#empAge");
const empSalay = document.querySelector("#empSalary");
const empGender = document.querySelector("#empGender");
const empRole = document.querySelector("#empRole");
let employeeTableBody = document.querySelector("#employeeTableBody");
let employeeForm = document.querySelector("#employeeForm");
let submitBtn = document.querySelector("#submit");
let currentRowTrack = null;
employeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let id = empId.value;
  let name = empName.value;
  let age = empAge.value;
  let salary = empSalay.value;
  let gender = empGender.value;
  let role = empRole.value;

  // console.log(id);
  // console.log(name);
  // console.log(age);
  // console.log(salary);
  // console.log(gender);
  // console.log(role);
  let tr = document.createElement("tr");
  if (currentRowTrack) {
    // console.log(currentRowTrack);
    currentRowTrack[0].textContent = id;
    console.log(id);

    currentRowTrack[1].textContent = name;
    currentRowTrack[2].textContent = age;
    currentRowTrack[3].textContent = salary;
    console.log(salary);

    currentRowTrack[4].textContent = gender;
    currentRowTrack[5].textContent = role;

    currentRowTrack = null;
    submitBtn.textContent = "Add Employee";
  } else {
    // let tr = document.createElement("tr");
    tr.innerHTML = `<td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${salary}</td>
            <td>${gender}</td>
            <td>${role}</td>
            <td>
              <button class="deleteBtn">Delete</button>
              <button class="editBtn">Edit</button>
            </td>`;
  }
  employeeTableBody.append(tr);

  employeeForm.reset();
});

employeeTableBody.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.classList.contains("deleteBtn")) {
    event.target.closest("tr").remove();
  }

  if (event.target.classList.contains("editBtn")) {
    const cells = event.target.closest("tr");
    // console.log(cells.children);
    currentRowTrack = cells.children;
    // console.log(currentRowTrack[0]);

    empId.value = currentRowTrack[0].textContent;
    empName.value = currentRowTrack[1].textContent;
    empAge.value = currentRowTrack[2].textContent;
    empSalay.value = currentRowTrack[3].textContent;
    empGender.value = currentRowTrack[4].textContent;
    empRole.value = currentRowTrack[5].textContent;

    submitBtn.textContent = "Update Employee";
  }
});
