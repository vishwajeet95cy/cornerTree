var corporateBtn = document.querySelector("#corporate");
var individualBtn = document.querySelector("#individual");
var name = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var category = document.querySelector("#category");
var company = document.querySelector("#company");

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