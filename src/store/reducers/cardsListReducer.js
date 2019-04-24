
import v4 from "uuid"
const ADD_CARD = "ADD_CARD"
const DELETE_CARD = "DELETE_CARD"
const ADD_ITEM = "ADD_ITEM"

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const deleteCard = (cardId) => ({ type: DELETE_CARD, cardId })
export const addItem = (payload) => ({ type: ADD_ITEM, payload })

export const cardsListReducer = (state = {
    cards: []
}, { type, payload, cardId }) => {
    switch (type) {
        case ADD_CARD: {
            return { ...state, cards: [...state.cards, payload] }
        }
        case DELETE_CARD: {
            return { ...state, cards: state.cards.filter((item) => item.cardId !== cardId) }
        }
        case ADD_ITEM: {
            // console.log(state.cards)
            return { ...state, cards: state.cards.map((item) => item.cardId === payload.cardId ? { ...item, cardItems: payload.item } : item) }
        }
        default: return state;
    }
}