var cardsArr = [
  //   {
  //     id: 001,
  //     title: "Test title 1",
  //     cardItems: [
  //       { isChecked: false, itemText: "Test text 1" },
  //       { isChecked: false, itemText: "Test text 2" }
  //     ]
  //   },
  //   {
  //     id: 002,
  //     title: "Test title 2",
  //     cardItems: [
  //       { isChecked: false, itemText: "Test text 1" },
  //       { isChecked: false, itemText: "Test text 2" },
  //       { isChecked: false, itemText: "Test text 3" }
  //     ]
  //   },
  //   {
  //     id: 003,
  //     title: "Test title 3",
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

  var cardItemList = document.createElement("ul");
  cardItemList.setAttribute("class", "card-body");

  for (var i = 0; i < card.cardItems.length; i++) {
    var cardListItem = document.createElement("li");
    var cardItemCheckbox = document.createElement("input");
    cardItemCheckbox.type = "checkbox";
    cardItemCheckbox.className = "checkbox";
    cardListItem.appendChild(cardItemCheckbox);

    var cardItemText = document.createElement("label");
    cardItemText.className = "card-body-title";
    // debugger;
    cardItemText.innerText = card.cardItems[i].itemText;
    cardListItem.appendChild(cardItemText);

    cardItemList.appendChild(cardListItem);
  }

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

  return cardItem;
}

function addNewCard() {
  cardsArr.push({
    id: Date.now(),
    title: "Test title 1",
    cardItems: [
      { isChecked: false, itemText: "Test text 1" },
      { isChecked: false, itemText: "Test text 2" }
    ]
  });
  renderCards(cardsContainer, cardsArr);
}

function deleteCard() {
  this.closest(".card-item").remove();
}

function renderCards(container, cardsList) {
  cardsList.map(createCard).forEach(function(card) {
    container.appendChild(card);
  });
}
