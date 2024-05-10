const submitFunction = (event) => {
  if (!formValidation()) {
    event.preventDefault();
  } else {
    event.preventDefault();

    alert("Your form has been successfully submitted!");
  }
};

document.getElementById("main-form").addEventListener("submit", submitFunction);

function formValidation() {
  const textFields = document.querySelectorAll('input[type="text"]');
  let trueValidation = true;

  textFields.forEach((textfield) => {
    let errorFields = document.getElementById(
      "error" + textfield.id.charAt(0).toUpperCase() + textfield.id.slice(1)
    );
    if (textfield.value.length == "") {
      showError(errorFields, "This field is required!");
      trueValidation = false;
    } else if (textfield.value.length > 0 && textfield.value.length < 3) {
      showError(errorFields, "Please enter at least 3 characters.");
      trueValidation = false;
    } else {
      hideError(errorFields);
    }
  });

  const emailEl = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
    hideError(errorEmail);
  } else {
    showError(errorEmail, "Please enter a valid email address");
  }

  const ageInputEl = document.getElementById("age");
  const errorAge = document.getElementById("errorAge");

  if (ageInputEl.value < 18) {
    showError(errorAge, "You must be at least 18 years old to register.");
    trueValidation = false;
  } else {
    hideError(errorAge);
  }

  const ocupationinputEl = document.getElementById("ocupation");
  const errorOcupation = document.getElementById("errorOcupation");

  if (ocupationinputEl.value == "") {
    showError(errorOcupation, "Please select an option");
    trueValidation = false;
  } else {
    hideError(errorOcupation);
  }

  const eduacationInputEl = document.getElementById("education");
  const errorEducation = document.getElementById("errorEducation");

  if (eduacationInputEl.value == "") {
    showError(errorEducation, "Please select an option");
    trueValidation = false;
  } else {
    hideError(errorEducation);
  }

  const termsEl = document.getElementById("t&cs");
  const errorTerms = document.getElementById("errorTerms");

  if (!termsEl.checked) {
    showError(errorTerms, "Please accept the terms and conditions to proceed.");
    trueValidation = false;
  } else {
    hideError(errorTerms);
  }

  return trueValidation;
}

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element) => {
  element.textContent = "";
  element.style.display = "none";
};
