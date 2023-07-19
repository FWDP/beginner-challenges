const actualId=document.getElementById("actualId");
 const blank=document.getElementById("blank");
 const actualForm=document.getElementById("actualForm");
 const newDetailsForm = document.getElementById("newDetails");
 const submitButton = document.getElementById("submitButton");
 const cancelButton = document.getElementById("cancelButton");
 const profilePictureContainer = document.getElementById("profilePictureContainer");

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

const gearIcon = document.getElementById("gearIcon");
const settings = document.getElementById("settings");

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
        const url = window.getComputedStyle(document.body).getPropertyValue('--upload-icon')
        const extractedLink = url.match(/"([^"]+)"/)[1].replace('../', '');
        setUploadIcon(extractedLink);
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
    let picture;
    if(event.dataTransfer.files)
     {picture = event.dataTransfer.files[0] }else{picture = event.target.files[0];} 
    let pictureReader = new FileReader;
    pictureReader.readAsDataURL(picture);
    pictureReader.onload = () => {
        PROFILEPICTUREIMAGE=pictureReader.result
        setUploadIcon(PROFILEPICTUREIMAGE)
    };
    console.log(pictureReader)
}
function setUploadIcon(src) {
    const uploadIcon = document.getElementById("uploadIcon");
    uploadIcon.setAttribute("src",src)
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
    const eyeColor = eyesColorField.value.toUpperCase()

    return {
        firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyeColor
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
        formValues.eyeColor];
    console.log(formValues);
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

async function handleIDDownload(){
    actualId.classList.toggle("shadow");
    await html2canvas(actualId,  {
        "windowWidth": actualId.scrollWidth,
        "windowHeight": actualId.scrollHeight,
        "removeContainer": false,
        "useCORS": true,
        "allowTaint": true,
    }).then((canvas) => {
        try{
        const link = document.createElement("a");
        

        document.body.appendChild(link);
        link.src = canvas.toDataURL('image/jpg');
        link.download = "html_image.jpg";
        link.href = canvas.toDataURL('image/jpg');
        link.target = '_blank';
        link.click();
    }
        catch(error) {
        console.error(error)
        }
    actualId.classList.toggle("shadow");
        
    })
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
profilePictureField.addEventListener('change', handlePictureUpload)

// Upload logic
function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
function dragOver(e){
    preventDefaults(e)
    highlight()
}
function dragEnter(e){
    preventDefaults(e)
    unhighlight()

}
function dragLeave(e){
    preventDefaults(e)
    unhighlight()
}
function drop(e){
    preventDefaults(e)
    
    const file = e.dataTransfer.files
    handlePictureUpload(e)
}

function highlight(){
    profilePictureContainer.classList.contains('highlight')?
        null : profilePictureContainer.classList.add('highlight')}

function unhighlight(){
    profilePictureContainer.classList.contains('highlight')?
        profilePictureContainer.classList.remove('highlight'): null}

profilePictureContainer.addEventListener('dragover', dragOver)
profilePictureContainer.addEventListener('dragenter', dragEnter)
profilePictureContainer.addEventListener('dragleave', dragLeave)
profilePictureContainer.addEventListener('drop', drop)
let settingsIsOpen = false
function toggleSettings(e){
    preventDefaults(e);

    settingsIsOpen ? hideSettings(e, true) : showSettings(e);
}
function showSettings(e){
    if (e.target === settings && !settingsIsOpen){return}
    if (settings.classList.contains('unwrap')){
    return
    } else if (settings.classList.contains('wrap')){
        gearIcon.classList.add('gearIconHover');
        settings.classList.replace('wrap', 'unwrap')
        settingsIsOpen =true  
    }
    else {
        gearIcon.classList.add('gearIconHover');
        settings.classList.add('unwrap')
        settingsIsOpen =true    
    }
}
function hideSettings(e, toggle = false){
    preventDefaults(e)
    if (!toggle && e.target === gearIcon && settings.classList.contains('unwrap')){return}
    if (settings.classList.contains('wrap')){
        return} else {
        settings.classList.replace('unwrap', 'wrap')
        gearIcon.classList.remove('gearIconHover');
        settingsIsOpen =false
    }
}
gearIcon.addEventListener('click', toggleSettings);
gearIcon.addEventListener('mouseenter', showSettings);
gearIcon.addEventListener('mouseleave', hideSettings);
settings.addEventListener('mouseover', showSettings)
settings.addEventListener('mouseleave', hideSettings)
  
const downloadIcon = document.getElementById('downloadIcon');
const editIcon = document.getElementById('editIcon');
const formIcon = document.getElementById('formIcon');

downloadIcon.addEventListener('mouseover', preventDefaults)
editIcon.addEventListener('mouseover', preventDefaults)
formIcon.addEventListener('mouseover', preventDefaults)
downloadIcon.addEventListener('mouseleave', preventDefaults)
editIcon.addEventListener('mouseleave', preventDefaults)
formIcon.addEventListener('mouseleave', preventDefaults)

downloadIcon.addEventListener('click', handleIDDownload)
formIcon.addEventListener('click', toggleDetailsForm)

