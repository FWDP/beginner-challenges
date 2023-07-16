
const actualId=document.getElementById("actualId")
const newDetailsForm = document.getElementById("newDetails");
const submitButton = document.getElementById("submitButton")
const cancelButton = document.getElementById("cancelButton")

function toggleDetailsForm() {
    try{
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
    const firstName = document.getElementById("firstName").value
    const middleName = document.getElementById("middleName").value
    const lastName = document.getElementById("lastName").value
    const fullName = `${lastName}, ${firstName} ${middleName}`.toUpperCase()
    const dob = document.getElementById("dob").value
    const date = new Date(dob)
    const dateString = [
                date.getMonth() + 1,
                date.getDate(),
                date.getFullYear()].join('/')
        
    const sex = document.getElementById("sex").value.toUpperCase()
    const pob = document.getElementById("pob").value.toUpperCase()
    const address = document.getElementById("address").value.toUpperCase()
    const bloodType = document.getElementById("bloodType").value.toUpperCase()
    const eyesColor = document.getElementById("eyeColor").value.toUpperCase()
    
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

actualId.addEventListener("click", toggleDetailsForm);
cancelButton.addEventListener("click",toggleDetailsForm)
submitButton.addEventListener("click",handleSubmit)