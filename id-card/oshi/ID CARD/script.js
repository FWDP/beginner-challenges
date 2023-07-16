// Get the necessary elements
const form = document.querySelector('.fCard');
const submitButton = document.querySelector('.submit');
const fullName = document.querySelector('.name h2');
const dob = document.querySelector('.DOB-SEX-POB h1:first-child');
const sex = document.querySelector('.DOB-SEX-POB h1:nth-child(2)');
const pob = document.querySelector('.DOB-SEX-POB h1:last-child');
const address = document.querySelector('.add h1');
const bloodType = document.querySelector('.type h1:first-child');
const eyeColor = document.querySelector('.type h1:last-child');

// Add event listener to the submit button
submitButton.addEventListener('click', updateCard);

function updateCard(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the values from the form inputs
  const firstName = form.elements[0].value;
  const lastName = form.elements[1].value;
  const middleName = form.elements[2].value;
  const dateOfBirth = form.elements[3].value;
  const selectedSex = form.elements[4].value;
  const placeOfBirth = form.elements[5].value;
  const userAddress = form.elements[6].value;
  const selectedBloodType = form.elements[7].value;
  const userEyeColor = form.elements[8].value;
  
  // Update the card with the user input
  fullName.textContent = `${lastName}, ${firstName} ${middleName}`;
  dob.textContent = dateOfBirth;
  sex.textContent = selectedSex.charAt(0).toUpperCase();
  pob.textContent = placeOfBirth;
  address.textContent = userAddress;
  bloodType.textContent = selectedBloodType;
  eyeColor.textContent = userEyeColor;
  
  // Reset the form
  form.reset();
}
