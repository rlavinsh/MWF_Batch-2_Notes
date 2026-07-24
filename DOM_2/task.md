Live Preview
Character Counter
Uppercase Converter

Change Event [city based,theme based]
[Mouseover,Mouseout]
[keydown event]
[submit event]


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Registration</title>
</head>
<body>

    <h1>Student Registration Form</h1>

    <form id="registerForm">

        <input
            type="text"
            id="firstName"
            placeholder="Enter First Name"
        >

        <br><br>

        <input
            type="text"
            id="lastName"
            placeholder="Enter Last Name"
        >

        <br><br>

        <input
            type="email"
            id="email"
            placeholder="Enter Email"
        >

        <br><br>

        <input
            type="password"
            id="password"
            placeholder="Enter Password"
        >

        <br><br>

        <label>

            <input
                type="radio"
                name="gender"
                value="Male"
            >

            Male

        </label>

        <label>

            <input
                type="radio"
                name="gender"
                value="Female"
            >

            Female

        </label>

        <label>

            <input
                type="radio"
                name="gender"
                value="Other"
            >

            Other

        </label>

        <br><br>

        <button>

            Register

        </button>

    </form>

    <script src="script.js"></script>

</body>
</html>

<!-- Javascript -->
let form = document.querySelector("#registerForm");

let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let gender = "";

    let genderList = document.querySelectorAll("[name='gender']");

    genderList.forEach((radio) => {

        if (radio.checked) {

            gender = radio.value;

        }

    });

    let student = {

        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        gender: gender

    };

    console.log(student);

    localStorage.setItem("student", JSON.stringify(student));

    form.reset();

});