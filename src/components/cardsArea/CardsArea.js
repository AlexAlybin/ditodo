import React from "react"
import styled from "styled-components"

import addCardBtn from "../../images/Add.svg"

import { Card } from "../card/Card"

const CardsAreaWrapper = styled.div`
background: #e4e4e4;
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
            cards: []
        }
    }
    render() {
        return (
            <CardsAreaWrapper>
                <Card />
                <Card />
                <Card />
                <AddCardBtn><img src={addCardBtn} /></AddCardBtn>
            </CardsAreaWrapper>
        )
    }
}