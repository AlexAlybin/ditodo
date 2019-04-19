import React from "react"
import styled from "styled-components"

import { Card } from "../card/Card"

const CardsAreaWrapper = styled.div`
height: 300px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 25px 0;
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
                {/* <h1>CARDS AREA</h1> */}
                <Card />
                <Card />
            </CardsAreaWrapper>
        )
    }
}