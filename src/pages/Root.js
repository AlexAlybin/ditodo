import React from 'react';
import { Header } from "../components/header/Header"
import { HeaderLine } from "../components/header/Header"
import { CardsArea } from "../components/cardsArea/CardsArea"
import toImg from "../images/p1.svg"
import doImg from "../images/p2.svg"

export const Root = () => (
    <div>
        <Header>
            <img src={toImg} />
            <HeaderLine />
            <img src={doImg} />
        </Header>
        <CardsArea />
    </div>
)

