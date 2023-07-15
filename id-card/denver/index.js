const Btn = document.querySelector('#submitBtn')
const name  = document.querySelector('#fullName')
const birthDate = document.querySelector('#birthDate')
const sex  = document.querySelector('#sex')
const city = document.querySelector('#city')
const address = document.querySelector('#fullAddress')
const bloodType = document.querySelector('#blood')
const eyeColor = document.querySelector('#eye') 



Btn.addEventListener('click',()=>{   
    getUserInput()    
    // console.log("hotdog")
    // `
})

const getUserInput = () =>{
    let userFullname= document.querySelector('#userName').value
    name.innerHTML = `${userFullname}`

    let userDate = document.querySelector('#userBirthYear').value
    birthDate.innerHTML = `${userDate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`

    let userSex = document.querySelector('#userSex').value
    sex.innerHTML = `${userSex}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`

    let userPlaceBirth = document.querySelector('#userPlaceBirth').value
    city.innerHTML = `${userPlaceBirth}`

    let userAddress = document.querySelector('#userAddress').value
    address.innerHTML = `${userAddress}`

    let userBloodType = document.querySelector('#userBloodType').value
    bloodType.innerHTML= `${userBloodType}&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp&nbsp;&nbsp;`

    let userEyeColor = document.querySelector('#userEyeColor').value
    eyeColor.innerHTML = `${userEyeColor}`
}
