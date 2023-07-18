//  NAME VARIABLES
 let defSName = document.getElementById("surename")
 let InputSname=  document.getElementById("input-surename")
 let defFname = document.getElementById("firstname")
 let InputFname=  document.getElementById("input-firstname")
 let defMname = document.getElementById("middlename")
 let InputMname=  document.getElementById("input-middlename")


//
let defBdate = document.getElementById("dob")
let InputBdate=  document.getElementById("bdate")

let defGender = document.getElementById("gender")
let InputGender=  document.getElementById("sex")

let defDob = document.getElementById("pob")
let InputDob=  document.getElementById("bod")

let defAdd = document.getElementById("def-address")
let InputAdd =  document.getElementById("address")


let defBlood = document.getElementById("blood")
let InputBlood =  document.getElementById("bloodtype")

let defEye = document.getElementById("eye")
let InputEye =  document.getElementById("eye-color")

let defPicture = document.getElementById("picture")
let inputPicture = document.getElementById("img")

const submit = document.getElementById("button")

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    defSName.textContent = InputSname.value
    defFname.textContent = InputFname.value
    defMname.textContent = InputMname.value
    defBdate.textContent = InputBdate.value  
    defGender.textContent = InputGender.value
    defDob.textContent = InputDob.value
    defAdd.textContent = InputAdd.value
    defBlood.textContent = InputBlood.value
    defEye.textContent = InputEye.value
  


})
 