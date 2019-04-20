import React from "react"
import styled from "styled-components"

import addCardBtn from "../../images/Add.svg"

import { Card } from "../card/Card"

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
`


export class CardsArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    cardId: 1,
                    title: "Card #1",
                    cardItems: [
                        {
                            itemId: 1,
                            isChecked: false,
                            itemText: "This is test item"
                        }
                    ]
                },
                {
                    cardId: 2,
                    title: "Card #2",
                    cardItems: [
                        {
                            itemId: 2,
                            isChecked: true,
                            itemText: "This is test item. This is test item. This is test item. This is test item."
                        },
                        {
                            itemId: 3,
                            isChecked: true,
                            itemText: "This is test item. This is test item. This is test item. This is test item."
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <CardsAreaWrapper>
                {this.state.cards.map(
                    (cardItem) => (
                        <Card
                            key={cardItem.cardId}
                            title={cardItem.title}
                            cardItems={cardItem.cardItems} />
                    )
                )
                }
                <AddCardBtn><img src={addCardBtn} /></AddCardBtn>
            </CardsAreaWrapper>
        )
    }
}