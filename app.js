var corporateBtn = document.querySelector("#corporate");
var individualBtn = document.querySelector("#individual");

var corpData = [];
var indiData = [];

function OpenForm() {
  if (corporateBtn.checked == true) {
    document.querySelector(".individual").style.display = "none";
    document.querySelector(".corporate").style.display = "block";
  } else if (individualBtn.checked == true) {
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".individual").style.display = "block";
  }
}

function showBtn() {
  document.querySelector(".Radiobtn").style.display = "block";
}

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function CorpData() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#mobile").value;
  var category = document.querySelector("#category").value;
  var company = document.querySelector("#company").value;

  corpData.push({ name, email, phone, category, company });
  console.log(corpData);
  document.querySelector("#CorpData").reset();
}

function IndiData() {
  var name = document.querySelector("#Indname").value;
  var email = document.querySelector("#Indemail").value;
  var phone = document.querySelector("#Indmobile").value;
  var category = document.querySelector("#Indcategory").value;

  indiData.push({ name, email, phone, category });
  console.log(indiData);
  document.querySelector("#IndiData").reset();
}

function IndValidation() {

  var name = document.querySelector("#Indname").value;
  var email = document.querySelector("#Indemail").value;
  var phone = document.querySelector("#Indmobile").value;
  var category = document.querySelector("#Indcategory").value;


  if (name == "") {
    document.querySelector("#names").innerHTML = "** Please fill the name field";
    return false;
  }
  if (!isNaN(name)) {
    document.querySelector("#names").innerHTML = "** Only Characters aree allowed";
    return false;
  }

  if (email == "") {
    document.querySelector("#emails").innerHTML = "** Please fill the email id field";
    return false;
  }
  if (email.indexOf('@') <= 0) {
    document.querySelector("#emails").innerHTML = "** @ invalid position ";
    return false;
  }
  if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
    document.querySelector("#emails").innerHTML = "** . invalid Position";
    return false;
  }

  if (phone == "") {
    document.querySelector("#mobiles").innerHTML = "** Please fill the phone number field";
    return false;
  }
  if (isNaN(phone)) {
    document.querySelector("#mobiles").innerHTML = "** User must write digits only not characters";
    return false;
  }
  if (phone.length != 10) {
    document.querySelector("#mobiles").innerHTML = "** Phone Number must be 10 Digits";
    return false;
  }

  if (category == "") {
    document.querySelector("#categorys").innerHTML = "** Please Select the Webinar Category field";
    return false;
  }

  IndiData();

}

function corpValidation() {

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#mobile").value;
  var company = document.querySelector("#company").value
  var category = document.querySelector("#category").value;


  if (name == "") {
    document.querySelector("#corpname").innerHTML = "** Please fill the name field";
    return false;
  }
  if (!isNaN(name)) {
    document.querySelector("#corpname").innerHTML = "** Only Characters aree allowed";
    return false;
  }

  if (email == "") {
    document.querySelector("#corpemail").innerHTML = "** Please fill the email id field";
    return false;
  }
  if (email.indexOf('@') <= 0) {
    document.querySelector("#corpemail").innerHTML = "** @ invalid position ";
    return false;
  }
  if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
    document.querySelector("#corpemail").innerHTML = "** . invalid Position";
    return false;
  }

  if (phone == "") {
    document.querySelector("#corpmobile").innerHTML = "** Please fill the phone number field";
    return false;
  }
  if (isNaN(phone)) {
    document.querySelector("#corpmobile").innerHTML = "** User must write digits only not characters";
    return false;
  }
  if (phone.length != 10) {
    document.querySelector("#corpmobile").innerHTML = "** Phone Number must be 10 Digits";
    return false;
  }

  if (category == "") {
    document.querySelector("#corpcategory").innerHTML = "** Please Select the Webinar Category field";
    return false;
  }

  if (company == "") {
    document.querySelector("#corpcompany").innerHTML = "** Please fill the company field";
    return false;
  }

  CorpData()

}