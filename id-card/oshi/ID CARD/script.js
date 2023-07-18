const card = document.getElementById('card');
const userPicture = document.getElementById('userPic');
const userESignature = document.getElementById('userESig');
const formCard = document.getElementById('formCard');
const userName = document.getElementById('fullName');
const formName = document.getElementById('Fullname');
const updateForm = document.getElementById('update')
const userDob = document.getElementById('dob');
const userSex = document.getElementById('sex');
const userPob = document.getElementById('pob');
const formDob = document.getElementById('fbday');
const formSex = document.getElementById('fsex');
const formPob = document.getElementById('fadd');
const userAddress = document.getElementById('address');
const formAddress = document.getElementById('faddress');
const userBloodType = document.getElementById('bloodType');
const userEyeColor = document.getElementById('eyeColor')
const formBloodType = document.getElementById('fbloodType');
const formEyeColor = document.getElementById('feyeColor')

function toggleFormID(){
    formCard.classList.toggle("show");
}

card.addEventListener('click', toggleFormID); 

updateForm.addEventListener('click', (event)=>{
    event.preventDefault();
    userName.textContent = formName.value
    userDob.textContent = formDob.value
    userSex.textContent = formSex.value
    userPob.textContent = formPob.value
    userAddress.textContent = formAddress.value
    userBloodType.textContent = formBloodType.value
    userEyeColor.textContent = formEyeColor.value
})
