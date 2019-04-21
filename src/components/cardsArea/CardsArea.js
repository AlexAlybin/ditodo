import React from "react"
import styled from "styled-components"

import addCardBtn from "../../images/Add.svg"

import { Card } from "../card/Card"
import { addCard, deleteCard, addItem } from "../../store/reducers/cardsListReducer"

import { connect } from 'react-redux';

const CardsAreaWrapper = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 25px 0;
`

const AddCardBtn = styled.button`
border: none;
background: none;
cursor: pointer;
position: fixed;
right: 50px;
bottom: 50px;
outline: none;
`


export class CardsAreaC extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    // cards: [
    //     {
    //         cardId: 1,
    //         title: "Card #1",
    //         cardItems: [
    //             {
    //                 itemId: 1,
    //                 isChecked: false,
    //                 itemText: "This is test item"
    //             }
    //         ]
    //     },
    //     {
    //         cardId: 2,
    //         title: "Card #2",
    //         cardItems: [
    //             {
    //                 itemId: 2,
    //                 isChecked: true,
    //                 itemText: "This is test item. This is test item. This is test item. This is test item."
    //             },
    //             {
    //                 itemId: 3,
    //                 isChecked: true,
    //                 itemText: "This is test item. This is test item. This is test item. This is test item."
    //             }
    //         ]
    //     }
    // ]
    //     }
    // }

    render() {
        const { cards, addCard, deleteCard, addItem } = this.props;
        const newCardObj = {
            cardId: Date.now(),
            title: "",
            cardItems: [
                // {
                //     itemId: Date.now(),
                //     isChecked: false,
                //     itemText: "This is test item"
                // }
            ]
        }

        const newItem = {
            isChecked: false,
            itemText: "TEST 123"
        }
        return (
            <CardsAreaWrapper>
                {
                    cards.map(card => (
                        <Card
                            key={card.cardId}
                            title={card.title}
                            cardItems={card.cardItems}
                            deleteCard={() => deleteCard(card.cardId)}
                            addItem={() => addItem(card.cardId, newItem)} />
                    ))
                }
                <AddCardBtn onClick={() => addCard(newCardObj)}><img src={addCardBtn} /></AddCardBtn>
            </CardsAreaWrapper>
        )
    }
}

export const CardsArea = connect(
    store => ({
        cards: store.cardsListReducer.cards
    }),
    dispatch => ({
        addCard: (payload) => dispatch(addCard(payload)),
        deleteCard: (cardId) => dispatch(deleteCard(cardId)),
        addItem: (cardId, payload) => dispatch(addItem(cardId, payload))
    })
)(CardsAreaC)