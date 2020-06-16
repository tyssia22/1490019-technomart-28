var bigMap = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var modalClose = modalMap.querySelector(".modal-close");
bigMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});
