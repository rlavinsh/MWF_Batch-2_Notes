const empId = document.querySelector("#empId");
const empName = document.querySelector("#empName");
const empAge = document.querySelector("#empAge");
const empSalay = document.querySelector("#empSalary");
const empGender = document.querySelector("#empGender");
const empRole = document.querySelector("#empRole");
let employeeTableBody = document.querySelector("#employeeTableBody");
let employeeForm = document.querySelector("#employeeForm");

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

  employeeTableBody.append(tr);
  employeeForm.reset();
});
