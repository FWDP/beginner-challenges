
const actualId=document.getElementById("actualId")
const newDetailsForm = document.getElementById("newDetails");

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

document.getElementById("actualId").addEventListener("click", toggleDetailsForm);
document.getElementById("cancelButton").addEventListener("click",toggleDetailsForm)