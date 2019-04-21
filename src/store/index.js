import { createStore, combineReducers } from "redux"
import { cardsListReducer } from "./reducers/cardsListReducer"

const rootReducer = combineReducers({
    cardsListReducer
})

export const store = createStore(rootReducer)