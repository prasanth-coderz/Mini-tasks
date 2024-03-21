function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone-no").value;
  var isValid = true;

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

  return isValid;
}
