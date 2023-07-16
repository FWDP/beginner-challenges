document.addEventListener("DOMContentLoaded",() => {
const actualId=document.getElementById("actualId");
const blank=document.getElementById("blank");
const actualForm=document.getElementById("actualForm");
const newDetailsForm = document.getElementById("newDetails");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");

const barcode = document.getElementById("barcode");
const firstNameField = document.getElementById("firstName");
const middleNameField = document.getElementById("middleName");
const lastNameField = document.getElementById("lastName");
const dobField = document.getElementById("dob");
const sexField = document.getElementById("sex");
const pobField = document.getElementById("pob");
const addressField = document.getElementById("address");
const bloodTypeField = document.getElementById("bloodType");
const eyesColorField = document.getElementById("eyeColor");
const profilePictureField = document.getElementById("profilePicture");
const profilePicture=document.getElementById("profilePictureView");

let PROFILEPICTUREIMAGE;

function toggleDetailsForm() {
    try{

        resetForm()
        actualId.classList.toggle("blur");

        if(actualId.classList.contains("blur")){
            actualId.classList.remove("unblur");
        }else{
            actualId.classList.add("unblur");
        }

        newDetailsForm.classList.toggle('floatUp')
        if(newDetailsForm.classList.contains("floatUp")){
            newDetailsForm.classList.remove("hide");
            newDetailsForm.classList.remove("floatDown");
            
        }else{
            newDetailsForm.classList.add("floatDown");
            newDetailsForm.classList.add("hide");

        }


        blank.classList.toggle("hide");
    }
    catch(error){
    console.log(error)
    }
}

function handleSubmit() {
    const {firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyeColor} = getFormValues();

    const fullName = `${lastName}, ${firstName} ${middleName}`.toUpperCase()
    const date = new Date(dob)
    const dateString = [
                date.getMonth() + 1,
                date.getDate(),
                date.getFullYear()].join('/')
    
    profilePicture.setAttribute('src', PROFILEPICTUREIMAGE);      
    document.getElementById("nameView").innerHTML=fullName
    document.getElementById("dobView").innerHTML=dateString
    document.getElementById("sexView").innerHTML=sex
    document.getElementById("pobView").innerHTML=pob
    document.getElementById("addressView").innerHTML=address
    document.getElementById("bloodTypeView").innerHTML=bloodType
    document.getElementById("eyeColorView").innerHTML=eyeColor
    updateQRcode(`${firstName} ${middleName} ${lastName}`)
    toggleDetailsForm()
}

function handlePictureUpload(event) {
    const picture = event.target.files[0];
    let pictureReader = new FileReader;
    pictureReader.readAsDataURL(picture);
    pictureReader.onload = () => {
        PROFILEPICTUREIMAGE=pictureReader.result
    };
}

function getFormValues() {
    const firstName = firstNameField.value
    const middleName = middleNameField.value
    const lastName = lastNameField.value
    const dob = dobField.value
    const sex = sexField.value.toUpperCase()
    const pob = pobField.value.toUpperCase()
    const address = addressField.value.toUpperCase()
    const bloodType = bloodTypeField.value
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
    const formValues = getFormValues();
    const requiredFormValues = [formValues.firstName,
        formValues.middleName,
        formValues.lastName,
        formValues.dob,
        formValues.sex,
        formValues.pob,
        formValues.address,
        formValues.bloodType,
        formValues.eyesColor];
    const valid = requiredFormValues.every(formValue =>!!formValue);

    if (valid){
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled','disabled');
    }
}

function updateQRcode(name){
    const parsedData=`Hi my name is ${name}.`

    qr=`https://barcode.orcascan.com/?type=qr&data=${parsedData}`;
    barcode.setAttribute('src',qr);
    
}
actualId.addEventListener("dblclick", toggleDetailsForm);

cancelButton.addEventListener("click",toggleDetailsForm)
blank.addEventListener("click",toggleDetailsForm)
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
profilePictureField.addEventListener('change', handlePictureUpload)});