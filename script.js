let fName = document.getElementById("first_name");
let fNameErr = document.getElementById("error-Fname");
let LName = document.getElementById("last_name");
let LNameErr = document.getElementById("error-Lname");
let email = document.getElementById("email");
let emailErr = document.getElementById("error-email");
let phone = document.getElementById("phone");
let phoneErr = document.getElementById("error-phone");
let pw = document.getElementById("password");
let pw_confirm = document.getElementById("confirm_password");
let pwCError = document.getElementById("error-CPw");
let form = document.getElementById("form");

fName.addEventListener("invalid", (e) => {
	if (e.target.validity.valueMissing) {
		e.target.setCustomValidity("Please tell us what is your first name");
	}
});

fName.addEventListener("change", (e) => {
	e.target.setCustomValidity("");
});

LName.addEventListener("invalid", (e) => {
	if (e.target.validity.valueMissing) {
		e.target.setCustomValidity("Please tell us what is your last name");
	}
});

LName.addEventListener("change", (e) => {
	e.target.setCustomValidity("");
});

LName.addEventListener("input", (e) => {
	if (LName.value === "" || LName.value == null) {
		e.target.setCustomValidity("Name is required");
	}
});

email.addEventListener("input", (e) => {
	if (email.validity.typeMismatch) {
		emailErr.textContent = "Please enter in a valid Email";
	} else {
		emailErr.textContent = "";
	}
});

phone.addEventListener("input", () => {
	if (phone.validity.patternMismatch) {
		phoneErr.textContent = "Please enter in a 12 digit Phone Number";
	} else {
		phoneErr.textContent = "";
	}
});

pw_confirm.addEventListener("input", (e) => {
	if (pw_confirm.value !== pw.value) {
		pwCError.textContent = "Passwords do not match";
	} else {
		pwCError.textContent = "";
	}
});
