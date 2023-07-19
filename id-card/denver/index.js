const submitBtn = document.querySelector('#submit')
const form = document.querySelector("form")
const idFullName = document.querySelector("#fullNameID")
const idBirthDate = document.querySelector("#birthDateID")
const idSex = document.querySelector('#sexID')
const idBirth = document.querySelector('#birthID')
const idAddress = document.querySelector('#addressID')
const idBlood = document.querySelector('#bloodID')
const idEyes = document.querySelector('#eyesID')



submitBtn.addEventListener('click',()=>{
      addToID()   
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
    }
    idBirth.innerHTML = `${birthPlace.toUpperCase()}`
    idAddress.innerHTML = `${address.toUpperCase()}`
    idBlood.innerHTML = `${bloodType}`
    idEyes.innerHTML = `${eyesColor}`

    form.reset()
}




