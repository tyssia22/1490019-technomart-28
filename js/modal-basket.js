var addbasket = document.querySelector(".new-price");
var modalBasket = document.querySelector(".modal-basket");
var modalClose = modalBasket.querySelector(".modal-close");
addbasket.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalBasket.classList.add("modal-show");
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.remove("modal-show");
});
