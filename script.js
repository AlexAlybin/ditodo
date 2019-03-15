var cardsArr = [
  //   {
  //     id: 001,
  //     title: "Test title 1",
  //     cardItems: [
  //       { isChecked: false, itemText: "Test text 1" },
  //       { isChecked: false, itemText: "Test text 2" }
  //     ]
  //   }
];

var cardsContainer = document.getElementById("cards-container");
var addCardBtn = document.getElementById("add-card-btn");
addCardBtn.addEventListener("click", addNewCard);

function createCard(card) {
  var cardItem = document.createElement("div");
  cardItem.className = "card-item";

  var cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  var cardHeaderTitle = document.createElement("div");
  cardHeaderTitle.className = "card-header-title";
  var cardHeaderTitleInput = document.createElement("input");
  cardHeaderTitleInput.type = "text";
  cardHeaderTitleInput.placeholder = "Add card title";
  cardHeaderTitleInput.value = card.title;
  cardHeaderTitle.appendChild(cardHeaderTitleInput);

  var cardHeaderIcon = document.createElement("div");
  cardHeaderIcon.setAttribute("class", "card-header-icon");
  var deleteCardIcon = document.createElement("img");
  deleteCardIcon.setAttribute("class", "delete-card-icon");
  deleteCardIcon.setAttribute("src", "images/delete.svg");
  deleteCardIcon.setAttribute("alt", "delete-icon");
  deleteCardIcon.addEventListener("click", deleteCard);
  cardHeaderIcon.appendChild(deleteCardIcon);

  let cardItemList = document.createElement("ul");
  cardItemList.setAttribute("class", "card-body");

  var cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-footer");
  var cardFooterInput = document.createElement("input");
  cardFooterInput.addEventListener(
    "change",
    addCardListItem(cardItemList, card.id)
  );
  cardFooterInput.setAttribute("type", "text");
  cardFooterInput.setAttribute("placeholder", "Add to-do");
  cardFooter.appendChild(cardFooterInput);

  cardHeader.appendChild(cardHeaderTitle);
  cardHeader.appendChild(cardHeaderIcon);
  cardItem.appendChild(cardHeader);
  cardItem.appendChild(cardItemList);
  cardItem.appendChild(cardFooter);

  return cardItem;
}

function addNewCard() {
  var _cardId = (Math.random() * (10000 - 1) + 1).toFixed(0);
  var _newCard = {
    id: _cardId,
    title: "Test card #" + _cardId,
    cardItems: []
  };
  cardsArr.push(_newCard);
  cardsContainer.appendChild(createCard(_newCard));
}

function addCardListItem(list, cardId) {
  return function() {
    var itemText = this.value;
    var cardListItem = document.createElement("li");
    var cardItemCheckbox = document.createElement("input");
    cardItemCheckbox.type = "checkbox";
    cardItemCheckbox.className = "checkbox";
    cardListItem.appendChild(cardItemCheckbox);

    var cardItemText = document.createElement("label");
    cardItemText.className = "card-body-title";
    cardItemText.innerText = itemText;
    cardListItem.appendChild(cardItemText);

    list.appendChild(cardListItem);

    for (var i = 0; i < cardsArr.length; i++) {
      if (cardsArr[i].id === cardId) {
        cardsArr[i].cardItems.push({ isChecked: false, itemText: itemText });
      }
    }
    this.value = "";
    console.log(cardsArr);
  };
}

function deleteCard() {
  this.closest(".card-item").remove();
}
