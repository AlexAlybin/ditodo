const ADD_CARD = "ADD_CARD"
const DELETE_CARD = "DELETE_CARD"

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const deleteCard = (cardId) => ({ type: DELETE_CARD, cardId })

export const cardsListReducer = (state = {
    cards: []
}, { type, payload }) => {
    switch (type) {
        case ADD_CARD: {
            return { ...state, cards: [...state.cards, payload] }
        }
        case DELETE_CARD: {
            return state
        }
        default: return state;
    }
}