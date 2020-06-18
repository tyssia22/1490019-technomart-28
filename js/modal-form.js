var buttonContact = document.querySelector(".button-contact");
var modalForm = document.querySelector(".modal-form");
var modalClose = modalForm.querySelector(".modal-close");
var userName = modalForm.querySelector(".user-name");
var userEmail = modalForm.querySelector(".user-email");
var writeUs = modalForm.querySelector(".write-us");
var userText = modalForm.querySelector(".user-text");
buttonContact.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalForm.classList.add("modal-show");
	userName.focus();
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalForm.classList.remove("modal-show");
});
writeUs.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    modalForm.classList.add("modal-error");
}
});