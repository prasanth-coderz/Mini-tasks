function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone-no").value;
  var genderMale = document.getElementById("male").checked;
  var genderFemale = document.getElementById("female").checked;
  var programmingLanguagesCheckboxes = document.getElementById(
    ".programming-language"
  );
  var socialmedia = document.getElementById("social").value;
  var directcheck = document.getElementById("direct").value;
  var friends = document.getElementById("friend").value;

  var isValid = true;
  var atLeastOneLanguageSelected = false;

  // Empty field validation
  if (name === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (phone === "") {
    document.getElementById("phoneError").innerHTML =
      "Phone number is required";
    isValid = false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  // Email validation
  var emailval = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailval.test(email) && email !== "") {
    document.getElementById("emailError").innerHTML = "Invalid email address";
    isValid = false;
  }

  // Phone number validation
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone) && phone !== "") {
    document.getElementById("phoneError").innerHTML = "Invalid phone number";
    isValid = false;
  }

  // radiobuttion validation
  if (!genderMale && !genderFemale) {
    document.getElementById("genderError").innerHTML = "Specify your gender";
    isValid = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  //dropdown validation

  if (!socialmedia && !directcheck && !friends) {
    document.getElementById("reference-error").innerHTML = "Select atleast one";
    isValid = false;
  } else {
    document.getElementById("reference-error").innerHTML = "";
  }

  if (!atLeastOneLanguageSelected) {
    document.getElementById("programmingLanguagesError").innerHTML =
      "Select at least one programming language";
    isValid = false;
  } else {
    document.getElementById("programmingLanguagesError").innerHTML = "";
  }

  return isValid;
}
