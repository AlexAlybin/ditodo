var cardsContainer = document.getElementById("cards-container");

var addCardBtn = document.getElementById("add-card-btn");
addCardBtn.addEventListener("click", addNewCard);

function addNewCard() {
  console.log("test");
  var cardItem = document.createElement("div");
  cardItem.setAttribute("class", "card-item");

  var cardHeader = document.createElement("div");
  cardHeader.setAttribute("class", "card-header");

  var cardHeaderTitle = document.createElement("div");
  cardHeaderTitle.setAttribute("class", "card-header-title");
  cardHeaderTitle.innerHTML =
    '<input type="text" placeholder="Add card title" />';

  var cardHeaderIcon = document.createElement("div");
  cardHeaderIcon.setAttribute("class", "card-header-icon");
  var deleteCardIcon = document.createElement("img");
  deleteCardIcon.setAttribute("class", "delete-card-icon");
  deleteCardIcon.setAttribute("src", "images/delete.svg");
  deleteCardIcon.setAttribute("alt", "delete-icon");
  deleteCardIcon.addEventListener("click", deleteCard);
  cardHeaderIcon.appendChild(deleteCardIcon);

  var cardItemList = document.createElement("ul");
  cardItemList.setAttribute("class", "card-body");

  var cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-footer");
  var cardFooterInput = document.createElement("input");
  cardFooterInput.setAttribute("type", "text");
  cardFooterInput.setAttribute("placeholder", "Add to-do");
  cardFooter.appendChild(cardFooterInput);

  cardHeader.appendChild(cardHeaderTitle);
  cardHeader.appendChild(cardHeaderIcon);
  cardItem.appendChild(cardHeader);
  cardItem.appendChild(cardItemList);
  cardItem.appendChild(cardFooter);
  cardsContainer.appendChild(cardItem);
}

function deleteCard() {
  this.closest(".card-item").remove();
}
