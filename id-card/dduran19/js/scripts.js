
const actualId=document.getElementById("actualId")
const actualForm=document.getElementById("actualForm")
const newDetailsForm = document.getElementById("newDetails");
const submitButton = document.getElementById("submitButton")
const cancelButton = document.getElementById("cancelButton")

const firstNameField = document.getElementById("firstName")
const middleNameField = document.getElementById("middleName")
const lastNameField = document.getElementById("lastName")
const dobField = document.getElementById("dob")
const sexField = document.getElementById("sex")
const pobField = document.getElementById("pob")
const addressField = document.getElementById("address")
const bloodTypeField = document.getElementById("bloodType")
const eyesColorField = document.getElementById("eyeColor")

function toggleDetailsForm() {
    try{
        resetForm()
        const {display: detailFormDisplay} = getComputedStyle(newDetailsForm)
        
        if ( detailFormDisplay === "none") {
            actualId.classList.add("blur")
            newDetailsForm.classList.replace("hide","show")

        } else {
            actualId.classList.remove("blur");
            newDetailsForm.classList.replace("show","hide")
        }
    }
    catch(error){
    console.log(error)
    }
}

function handleSubmit(){
    const {firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyesColor} = getFormValues();

    const fullName = `${lastName}, ${firstName} ${middleName}`.toUpperCase()
    const date = new Date(dob)
    const dateString = [
                date.getMonth() + 1,
                date.getDate(),
                date.getFullYear()].join('/')

    // console.log(fullName,dateString,sex,pob,address,bloodType,eyesColor)
    document.getElementById("nameView").innerHTML=fullName
    document.getElementById("dobView").innerHTML=dateString
    document.getElementById("sexView").innerHTML=sex
    document.getElementById("pobView").innerHTML=pob
    document.getElementById("addressView").innerHTML=address
    document.getElementById("bloodTypeView").innerHTML=bloodType
    document.getElementById("eyeColorView").innerHTML=eyesColor

    toggleDetailsForm()
}

function getFormValues() {
    const firstName = firstNameField.value
    const middleName = middleNameField.value
    const lastName = lastNameField.value
    const dob = dobField.value
    const sex = sexField.value.toUpperCase()
    const pob = pobField.value.toUpperCase()
    const address = addressField.value.toUpperCase()
    const bloodType = bloodTypeField.value.toUpperCase()
    const eyesColor = eyesColorField.value.toUpperCase()

    return {
        firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyesColor
    }
}    

function resetForm(){
    actualForm.reset()
}

function updateSubmitButton(){
    const {firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyesColor} = getFormValues();
    let valid = false;
    if(firstName && lastName && dob && sex && pob && address && bloodType && eyesColor){
        valid = true;
    }
    console.log("valid", valid);
    if (valid){
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled','disabled');
    }
}

actualId.addEventListener("click", toggleDetailsForm);
cancelButton.addEventListener("click",toggleDetailsForm)
submitButton.addEventListener("click",handleSubmit)

firstNameField.addEventListener('change', updateSubmitButton)
middleNameField.addEventListener('change', updateSubmitButton)
lastNameField.addEventListener('change', updateSubmitButton)
dobField.addEventListener('change', updateSubmitButton)
sexField.addEventListener('change', updateSubmitButton)
pobField.addEventListener('change', updateSubmitButton)
addressField.addEventListener('change', updateSubmitButton)
bloodTypeField.addEventListener('change', updateSubmitButton)
eyesColorField.addEventListener('change', updateSubmitButton)