const actualId = document.getElementById("actualId");
const blank = document.getElementById("blank");
const actualForm = document.getElementById("actualForm");
const actualForm2 = document.getElementById("actualForm2");
const newDetailsForm = document.getElementById("newDetails");
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
const profilePictureContainer = document.getElementById("profilePictureContainer");
const profilePictureContainer2 = document.getElementById("profilePictureContainer2");

const barcode = document.getElementById("barcode");
const firstNameField = document.getElementById("firstName");
const middleNameField = document.getElementById("middleName");
const lastNameField = document.getElementById("lastName");
const dobField = document.getElementById("dob");
const sexField = document.getElementById("sex");
const pobField = document.getElementById("pob");
const addressField = document.getElementById("address");
const bloodTypeField = document.getElementById("bloodType");
const eyeColorField = document.getElementById("eyeColor");
const profilePictureField = document.getElementById("profilePicture");
const profilePicture = document.getElementById("profilePictureView");
const nameView = document.getElementById("nameView")
const dobView = document.getElementById("dobView")
const sexView = document.getElementById("sexView")
const pobView = document.getElementById("pobView")
const addressView = document.getElementById("addressView")
const bloodTypeView = document.getElementById("bloodTypeView")
const eyeColorView = document.getElementById("eyeColorView")
const nameEdit = document.getElementById("nameEdit")
const dobEdit = document.getElementById("dobEdit")
const sexEdit = document.getElementById("sexEdit")
const pobEdit = document.getElementById("pobEdit")
const addressEdit = document.getElementById("addressEdit")
const bloodTypeEdit = document.getElementById("bloodTypeEdit")
const eyeColorEdit = document.getElementById("eyeColorEdit")
const submitButton2 = document.getElementById("submitButton2");
const cancelButton2 = document.getElementById("cancelButton2");

let viewMode = true;
let PROFILEPICTUREIMAGE;

const gearIcon = document.getElementById("gearIcon");
const settings = document.getElementById("settings");

function toggleDetailsForm() {
    try {

        resetForm()
        actualId.classList.toggle("blur");

        if (actualId.classList.contains("blur")) {
            actualId.classList.remove("unblur");
        } else {
            actualId.classList.add("unblur");
        }

        newDetailsForm.classList.toggle('floatUp')
        if (newDetailsForm.classList.contains("floatUp")) {
            newDetailsForm.classList.remove("hide");
            newDetailsForm.classList.remove("floatDown");

        } else {
            newDetailsForm.classList.add("floatDown");
            newDetailsForm.classList.add("hide");

        }
        const url = window.getComputedStyle(document.body).getPropertyValue('--upload-icon')
        const extractedLink = url.match(/"([^"]+)"/)[1].replace('../', '');
        setUploadIcon(extractedLink);
        blank.classList.toggle("hide");
    } catch (error) {
        console.log(error)
    }
}

function handleSubmit() {
    const {
        firstName,
        middleName,
        lastName,
        dob,
        sex,
        pob,
        address,
        bloodType,
        eyeColor
    } = getFormValues();
    console.log(getFormValues());
    const fullName = viewMode ? `${lastName}, ${firstName} ${middleName}`.toUpperCase() : lastName.toUpperCase();
    const date = new Date(dob)
    const dateString = [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear()
    ].join('/')

    profilePicture.setAttribute('src', PROFILEPICTUREIMAGE);
    nameView.innerHTML = fullName
    dobView.innerHTML = dateString
    sexView.innerHTML = sex
    pobView.innerHTML = pob
    addressView.innerHTML = address
    bloodTypeView.innerHTML = bloodType
    eyeColorView.innerHTML = eyeColor
    updateQRcode(`${firstName} ${middleName} ${lastName}`)
    viewMode ? toggleDetailsForm() : toggleEditMode()
}

function handlePictureUpload(event) {
    let picture;

    if (event.dataTransfer.files) {
        picture = event.dataTransfer.files[0]
    } else {
        picture = event.target.files[0];
    }

    let pictureReader = new FileReader;
    pictureReader.readAsDataURL(picture);
    pictureReader.onload = () => {
        PROFILEPICTUREIMAGE = pictureReader.result
        viewMode ? setUploadIcon(PROFILEPICTUREIMAGE) : 
            profilePictureContainer2.setAttribute('src', PROFILEPICTUREIMAGE)

    };
    console.log(pictureReader)
}

function setUploadIcon(src) {
    const uploadIcon = document.getElementById("uploadIcon");
    uploadIcon.setAttribute("src", src)
}

function getFormValues() {
    let firstName = '';
    let middleName = '';
    let lastName;
    let dob;
    let sex;
    let pob;
    let address;
    let bloodType;
    let eyeColor;

    if (viewMode) {
        firstName = firstNameField.value
        middleName = middleNameField.value
        lastName = lastNameField.value
        dob = dobField.value
        sex = sexField.value.toUpperCase()
        pob = pobField.value.toUpperCase()
        address = addressField.value.toUpperCase()
        bloodType = bloodTypeField.value
        eyeColor = eyeColorField.value.toUpperCase()
    } else {
        lastName = nameEdit.value
        dob = dobEdit.value
        sex = sexEdit.value.toUpperCase()
        pob = pobEdit.value.toUpperCase()
        address = addressEdit.value.toUpperCase()
        bloodType = bloodTypeEdit.value
        eyeColor = eyeColorEdit.value.toUpperCase()
    }

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

function resetForm() {
    actualForm.reset();
    actualForm2.reset();
}

function updateSubmitButton() {
    const formValues = getFormValues();
    const requiredFormValues = [formValues.firstName,
        formValues.middleName,
        formValues.lastName,
        formValues.dob,
        formValues.sex,
        formValues.pob,
        formValues.address,
        formValues.bloodType,
        formValues.eyeColor
    ];
    console.log(formValues);
    const valid = requiredFormValues.every(formValue => !!formValue);

    if (valid) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}

function updateQRcode(name) {
    const parsedData = `Hi my name is ${name}.`

    const qr = `https://barcode.orcascan.com/?type=qr&data=${parsedData}`;
    barcode.setAttribute('src', qr);

}

async function handleIDDownload() {
    actualId.classList.toggle("shadow");
    await html2canvas(actualId, {
        "windowWidth": actualId.scrollWidth,
        "windowHeight": actualId.scrollHeight,
        "removeContainer": false,
        "useCORS": true,
        "allowTaint": true,
    }).then((canvas) => {
        try {
            const link = document.createElement("a");
            link.src = canvas.toDataURL('image/jpg');
            link.download = "html_image.jpg";
            link.href = canvas.toDataURL('image/jpg');
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error(error)
        } finally {
            actualId.classList.toggle("shadow");
        }
    })
}
actualId.addEventListener("dblclick", toggleDetailsForm);
cancelButton.addEventListener("click", toggleDetailsForm)
blank.addEventListener("click", toggleDetailsForm)
submitButton.addEventListener("click", handleSubmit)


firstNameField.addEventListener('change', updateSubmitButton)
middleNameField.addEventListener('change', updateSubmitButton)
lastNameField.addEventListener('change', updateSubmitButton)
dobField.addEventListener('change', updateSubmitButton)
sexField.addEventListener('change', updateSubmitButton)
pobField.addEventListener('change', updateSubmitButton)
addressField.addEventListener('change', updateSubmitButton)
bloodTypeField.addEventListener('change', updateSubmitButton)
eyeColorField.addEventListener('change', updateSubmitButton)
profilePictureField.addEventListener('change', handlePictureUpload)

// Upload logic
function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

function highlight() {
    console.log('Highlight')
    if (viewMode) {
        profilePictureContainer.classList.contains('highlight') ?
            null : profilePictureContainer.classList.add('highlight')
        profilePictureContainer2.classList.contains('highlight') ?
            null : profilePictureContainer2.classList.add('highlight')
    } else {
        profilePictureContainer.classList.contains('highlight') ?
            null : profilePictureContainer.classList.add('highlight')
        profilePictureContainer2.classList.contains('highlight') ?
            null : profilePictureContainer2.classList.add('highlight')
    }
}


function unhighlight() {
    if (viewMode) {
        profilePictureContainer.classList.contains('highlight') ?
            profilePictureContainer.classList.remove('highlight') : null
        profilePictureContainer2.classList.contains('highlight') ?
            profilePictureContainer2.classList.remove('highlight') : null
    } else {
        profilePictureContainer.classList.contains('highlight') ?
            profilePictureContainer.classList.remove('highlight') : null
        profilePictureContainer2.classList.contains('highlight') ?
            profilePictureContainer2.classList.remove('highlight') : null
    }
}


function dragOver(e) {
    preventDefaults(e)
    highlight()
}

function dragEnter(e) {
    preventDefaults(e)
    unhighlight()

}

function dragLeave(e) {
    preventDefaults(e)
    unhighlight()
}

function drop(e) {
    preventDefaults(e)
    const file = e.dataTransfer.files
    handlePictureUpload(e)
}


profilePictureContainer.addEventListener('dragover', dragOver)
profilePictureContainer.addEventListener('dragenter', dragEnter)
profilePictureContainer.addEventListener('dragleave', dragLeave)
profilePictureContainer.addEventListener('drop', drop)
profilePictureContainer2.addEventListener('dragover', dragOver)
profilePictureContainer2.addEventListener('dragenter', dragEnter)
profilePictureContainer2.addEventListener('dragleave', dragLeave)
profilePictureContainer2.addEventListener('drop', drop)
let settingsIsOpen = false

function toggleSettings(e) {
    preventDefaults(e);

    settingsIsOpen ? hideSettings(e, true) : showSettings(e);
}

function showSettings(e) {
    if (e.target === settings && !settingsIsOpen) {
        return
    }
    if (settings.classList.contains('unwrap')) {
        return
    } else if (settings.classList.contains('wrap')) {
        gearIcon.classList.add('gearIconHover');
        settings.classList.replace('wrap', 'unwrap')
        settingsIsOpen = true
    } else {
        gearIcon.classList.add('gearIconHover');
        settings.classList.add('unwrap')
        settingsIsOpen = true
    }
}

function hideSettings(e, toggle = false) {
    preventDefaults(e)
    if (!toggle && e.target === gearIcon && settings.classList.contains('unwrap')) {
        return
    }
    if (settings.classList.contains('wrap')) {
        return
    } else {
        settings.classList.replace('unwrap', 'wrap')
        gearIcon.classList.remove('gearIconHover');
        settingsIsOpen = false
    }
}
gearIcon.addEventListener('click', toggleSettings);
gearIcon.addEventListener('mouseenter', showSettings);
gearIcon.addEventListener('mouseleave', hideSettings);
settings.addEventListener('mouseover', showSettings)
settings.addEventListener('mouseleave', hideSettings)

const downloadIcon = document.getElementById('downloadIcon');
const editIcon = document.getElementById('editIcon');
editIcon.addEventListener("click", toggleEditMode);

const formIcon = document.getElementById('formIcon');

downloadIcon.addEventListener('mouseover', preventDefaults)
editIcon.addEventListener('mouseover', preventDefaults)
formIcon.addEventListener('mouseover', preventDefaults)
downloadIcon.addEventListener('mouseleave', preventDefaults)
editIcon.addEventListener('mouseleave', preventDefaults)
formIcon.addEventListener('mouseleave', preventDefaults)

downloadIcon.addEventListener('click', handleIDDownload)
formIcon.addEventListener('click', toggleDetailsForm)

function toggleEditMode() {
    viewMode = !viewMode;
    console.log("NEW: ", viewMode);
    nameView.classList.toggle("hide")
    dobView.classList.toggle("hide")
    sexView.classList.toggle("hide")
    pobView.classList.toggle("hide")
    addressView.classList.toggle("hide")
    bloodTypeView.classList.toggle("hide")
    eyeColorView.classList.toggle("hide")
    nameEdit.classList.toggle("hide")
    dobEdit.classList.toggle("hide")
    sexEdit.classList.toggle("hide")
    pobEdit.classList.toggle("hide")
    addressEdit.classList.toggle("hide")
    bloodTypeEdit.classList.toggle("hide")
    eyeColorEdit.classList.toggle("hide")
    submitButton2.classList.toggle("hide")
    cancelButton2.classList.toggle("hide")
    profilePictureContainer2.classList.toggle("hide")
}
actualForm2.onsubmit = (event) => {
    preventDefaults(event);
    handleSubmit();
}
console.log(viewMode)