let inputName = document.getElementById("full-name")
let fullName = document.getElementById("fullname")

let inputDob = document.getElementById("bdate")
let dateOfBirth = document.getElementById("dob")

let inputGender = document.getElementById("sex")
let gender = document.getElementById("gender")

let inputBirthPlace = document.getElementById("bod")
let pob = document.getElementById("pob")

let address = document.getElementById("def-address")
let inputAddress = document.getElementById("address")

let blood = document.getElementById("blood")
let inputBlood = document.getElementById("bloodtype")

let eyeColor = document.getElementById("eye")
let inputEyeColor = document.getElementById("eye-color")
const submit = document.getElementById("button")


submit.addEventListener("click",(event)=>{
    event.preventDefault();
    fullName.textContent = inputName.value
    dateOfBirth.textContent = inputDob.value
    gender.textContent = inputGender.value
    pob.textContent = inputBirthPlace.value
    address.textContent = inputAddress.value
    blood.textContent = inputBlood.value
    eyeColor.textContent = inputEyeColor.value


})
 