const submitBtn = document.querySelector('#submit')
const cancelBtn = document.querySelector('#cancel')
const form = document.querySelector("form")
const idCard =document.querySelector(".id-container")
const idFullName = document.querySelector("#fullNameID")
const idBirthDate = document.querySelector("#birthDateID")
const idSex = document.querySelector('#sexID')
const idBirth = document.querySelector('#birthID')
const idAddress = document.querySelector('#addressID')
const idBlood = document.querySelector('#bloodID')
const idEyes = document.querySelector('#eyesID')
const idPhoto = document.querySelector('#photoID')
const photoInput = document.querySelector('#photo')
const modalBg = document.querySelector('.modal-bg')
const downloadBtn = document.querySelector('#downLoadBtn')
let uPhoto 

const qrCode = document.querySelector('#qrCode')

downloadBtn.addEventListener('click', ()=>{
    
})

modalBg.addEventListener('click', ()=>{
    hideForm()
    hideModal()
})

submitBtn.addEventListener('click',()=>{
        // generateQR()
      addToID() 
      addIdPhoto()   
      hideForm()
      hideModal()   
})

cancelBtn.addEventListener('click',()=> {
    hideForm()
    hideModal()
})

idCard.addEventListener('dblclick',()=> {
    showModal()
    showForm()
    
})

const addToID = ()=>{

    let firstName = document.querySelector('#firstName').value
    let middleName = document.querySelector('#middleName').value
    let LastName = document.querySelector('#lastName').value
    let birthDate = document.querySelector('#birthDate').value
    let birthPlace = document.querySelector('#place').value
    let address = document.querySelector('#address').value
    let bloodType = document.querySelector('#bloodType').value
    let eyesColor = document.querySelector('#eyesColor').value
    

    idFullName.innerHTML = `${LastName.toUpperCase()}, ${firstName.toUpperCase()}, ${middleName.toUpperCase()}`
    idBirthDate.innerHTML = `${birthDate}`
    let sex =  document.getElementsByName('Sex')
    for (i = 0; i< sex.length; i++ ){
        if (sex[i].checked){
            idSex.innerHTML = sex[i].value
        }
    }//try if for each will work
    idBirth.innerHTML = `${birthPlace.toUpperCase()}`
    idAddress.innerHTML = `${address.toUpperCase()}`
    idBlood.innerHTML = `${bloodType}`
    idEyes.innerHTML = `${eyesColor}`

    let qrImage = `https://barcode.orcascan.com/?data=Hi I'm ${firstName} ${middleName} ${LastName} `
    
    qrCode.setAttribute ('src',qrImage)
    

    form.reset()
}


const showForm = ()=> {
    form.style.display= `grid`
    photoInput.addEventListener('change', () =>{
        const file = photoInput.files[0]
        const reader = new FileReader()
        reader.onload = ()=> uPhoto = reader.result     
        reader.readAsDataURL(file)
    })
}

const hideForm = ()=> form.style.display= `none`

const showModal = ()=> modalBg.style.display = 'block' 

const hideModal = ()=> modalBg.style.display = 'none' 

const addIdPhoto = ()=> idPhoto.setAttribute('src', uPhoto)

const screenShot = ()=>{
    html2canvas(document.querySelector(".id-container")).then(canvas => {
        const image = canvas.toDataURL()
        // get the base 64 encoded image data

        // create a link with download attribute
        let downloadLink = document.createElement("a")
        downloadLink.href = image;
        downloadLink.download = "screenshot.png"
        console.log(downloadLink)
        // appende the link to the body

        document.body.appendChild(downloadLink)

        //Click the link to download the image
        downloadLink.click()
        
});


}


