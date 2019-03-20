let cardsArr = [
  //   {
  //     id: 001,
  //     title: "Test title 1",
  //     cardItems: [
  //       { isChecked: false, itemText: "Test text 1" },
  //       { isChecked: false, itemText: "Test text 2" }
  //     ]
  //   }
];

const cardsContainer = document.getElementById("cards-container");

const createCard = card => {
  const cardItem = document.createElement("div");
  cardItem.className = "card-item";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const cardHeaderTitle = document.createElement("div");
  cardHeaderTitle.className = "card-header-title";
  const cardHeaderTitleInput = document.createElement("input");
  cardHeaderTitleInput.type = "text";
  cardHeaderTitleInput.placeholder = "Add card title";
  cardHeaderTitleInput.value = card.title;
  cardHeaderTitle.appendChild(cardHeaderTitleInput);

  const cardHeaderIcon = document.createElement("div");
  cardHeaderIcon.setAttribute("class", "card-header-icon");
  const deleteCardIcon = document.createElement("img");
  deleteCardIcon.setAttribute("class", "delete-card-icon");
  deleteCardIcon.setAttribute("src", "images/delete.svg");
  deleteCardIcon.setAttribute("alt", "delete-icon");
  cardHeaderIcon.dataset.id = card.id;
  cardHeaderIcon.appendChild(deleteCardIcon);
  deleteCardIcon.addEventListener("click", function(e) {
    deleteCard(e, card.id);
  });

  const cardItemList = document.createElement("ul");
  cardItemList.setAttribute("class", "card-body");

  const cardFooter = document.createElement("div");
  cardFooter.setAttribute("class", "card-footer");
  const cardFooterInput = document.createElement("input");
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
};

const addNewCard = () => {
  const _cardId = String(Date.now()).slice(-4);
  const _newCard = {
    id: _cardId,
    title: "Test card #" + _cardId,
    cardItems: []
  };
  cardsArr.push(_newCard);
  cardsContainer.appendChild(createCard(_newCard));
};

const addCardBtn = document.getElementById("add-card-btn");
addCardBtn.addEventListener("click", addNewCard);

const addCardListItem = (list, cardId) =>
  function() {
    const itemText = this.value;
    const cardListItem = document.createElement("li");
    const cardItemCheckbox = document.createElement("input");
    const itemId = String(Date.now()).slice(-4);
    cardItemCheckbox.type = "checkbox";
    cardItemCheckbox.className = "checkbox";
    cardItemCheckbox.dataset.id = itemId;
    cardItemCheckbox.addEventListener("change", function(e) {
      markAsDone(e, cardItemText, cardId, itemId);
    });
    cardListItem.appendChild(cardItemCheckbox);

    const cardItemText = document.createElement("label");
    cardItemText.className = "card-body-title";
    cardItemText.innerText = itemText;
    cardListItem.appendChild(cardItemText);

    list.appendChild(cardListItem);

    // for (let i = 0; i < cardsArr.length; i++) {
    //   if (cardsArr[i].id === cardId) {
    //     cardsArr[i].cardItems.push({
    //       id: itemId,
    //       isChecked: false,
    //       itemText: itemText
    //     });
    //   }
    // }
    cardsArr = cardsArr.map(item =>
      item.id === cardId
        ? {
            ...item,
            cardItems: [
              ...item.cardItems,
              {
                id: itemId,
                isChecked: false,
                itemText: itemText
              }
            ]
          }
        : item
    );

    this.value = "";
    console.log(cardsArr);
  };

function deleteCard(e, id) {
  e.target.closest(".card-item").remove();
  for (let i = 0; i < cardsArr.length; i++) {
    if (cardsArr[i].id === id) {
      cardsArr.splice(cardsArr[i], 1);
    }
  }
}

function markAsDone(e, cardItem, cardId, itemId) {
  if (e.target.checked) {
    cardItem.classList.add("checked-text");
  } else {
    cardItem.classList.remove("checked-text");
  }
  cardsArr = cardsArr.map(item =>
    item.id === cardId
      ? {
          ...item,
          cardItems: item.cardItems.map(cardItem =>
            cardItem.id === itemId
              ? { ...cardItem, isChecked: e.target.checked }
              : cardItem
          )
        }
      : item
  );
}
