const submitBtn = document.querySelector("#submit");
const cancelBtn = document.querySelector("#cancel");
const form = document.querySelector("form");
const idCard = document.querySelector(".id-container");
const idFullName = document.querySelector("#fullNameID");
const idBirthDate = document.querySelector("#birthDateID");
const idSex = document.querySelector("#sexID");
const idBirth = document.querySelector("#birthID");
const idAddress = document.querySelector("#addressID");
const idBlood = document.querySelector("#bloodID");
const idEyes = document.querySelector("#eyesID");
const idPhoto = document.querySelector("#photoID");
const photoInput = document.querySelector("#photo");
const modalBg = document.querySelector(".modal-bg");
const downloadBtn = document.querySelector("#downLoadBtn");
const dropDown = document.querySelector("#dropdown");
let uPhoto;

const qrCode = document.querySelector("#qrCode");

downloadBtn.addEventListener("click", () => {});

modalBg.addEventListener("click", () => {
  hideForm();
});

submitBtn.addEventListener("click", () => {
  addToID();
  addIdPhoto();
  hideForm();
});

cancelBtn.addEventListener("click", () => {
  hideForm();
});

idCard.addEventListener("dblclick", () => {
  showForm();
});


// get the value of user input in the form and then add it to the id card details
const addToID = () => {
  let firstName = document.querySelector("#firstName").value;
  let middleName = document.querySelector("#middleName").value;
  let LastName = document.querySelector("#lastName").value;
  let birthDate = document.querySelector("#birthDate").value;
  let birthPlace = document.querySelector("#place").value;
  let address = document.querySelector("#address").value;
  let bloodType = document.querySelector("#bloodType").value;
  let eyesColor = document.querySelector("#eyesColor").value;

  idFullName.value = `${LastName.toUpperCase()}, ${firstName.toUpperCase()}, ${middleName.toUpperCase()}`;
  idBirthDate.value = `${birthDate}`;

  let sex = document.getElementsByName("Sex");
  for (i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      idSex.value = sex[i].value;
    }
  } 
  idBirth.value = `${birthPlace.toUpperCase()}`;
  idAddress.value = `${address.toUpperCase()}`;
  idBlood.value = `${bloodType}`;
  idEyes.value = `${eyesColor}`;

  let qrImage = `https://barcode.orcascan.com/?data=Hi I'm ${firstName} ${middleName} ${LastName} `;

  qrCode.setAttribute("src", qrImage);

  form.reset();
};


const showForm = () => {
  form.style.display = `grid`;
  modalBg.style.display = "block";
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    const reader = new FileReader();
    reader.onload = () => (uPhoto = reader.result);
    reader.readAsDataURL(file);
  });
};

const hideForm = () => {
  form.style.display = `none`;
  modalBg.style.display = "none";
};

const addIdPhoto = () => idPhoto.setAttribute("src", uPhoto);

const screenShot = () => {
  html2canvas(document.querySelector(".id-container"), { useCORS: true }).then(
    (canvas) => {
      const image = canvas.toDataURL();
      // get the base 64 encoded image data

      // create a link with download attribute
      let downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = "screenshot.png";

      // appende the link to the body

      console.log(qrCode);
      document.body.appendChild(downloadLink);
      
      //Click the link to download the image
      downloadLink.click();
    },

  );
};

const showList = () => {
  let dropDownStyle = getComputedStyle(dropDown);
  let dropDvalue = dropDownStyle.getPropertyValue("display");
  let checkDropdDown = dropDvalue === "none" ? true : false;
  dropDown.style.display = checkDropdDown ? "block" : "none";
};

const toggleEdit = () => {
  idEyes.toggleAttribute("disabled");
  idBlood.toggleAttribute("disabled");
  idAddress.toggleAttribute("disabled");
  idBirth.toggleAttribute("disabled");
  idSex.toggleAttribute("disabled");
  idBirthDate.toggleAttribute("disabled");
  idFullName.toggleAttribute("disabled");
}
