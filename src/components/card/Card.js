import React from "react"
import styled from "styled-components"
import deleteBtn from "../../images/delete.svg"

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
height: 270px;
width: 450px;
border-radius: 6px;
margin-top: 10px;
`

const CardHeader = styled.div`
display:flex;
justify-content: space-between;
height: 30px;
width: 100%;
`

const CardBody = styled.div`
display:flex;
flex-direction: column;
height: calc(100% - 30px - 30px);
width: 100%;
`

const CardFooter = styled.div`
display:flex;
height: 30px;
width: 100%;
margin-top: auto;
`

const CardTitleInput = styled.input`
width: 80%;
border: none;
margin-left: 5px;
`

const CardDeleteBtn = styled.button`
border: none;
background: none;
cursor: pointer;
outline: none;
`

const CardItem = styled.div`
display: flex;
width: 100%;
height: fit-content;
justify-content: flex-start;
margin: 5px;
`

const CardFooterInput = styled.input`
width: 80%;
border: none;
margin-left: 5px;
margin-bottom: 5px;
`

export const Card = (props) =>
    (
        <CardWrapper>
            <CardHeader>
                <CardTitleInput defaultValue={props.title} type="text" placeholder="Type card title" />
                <CardDeleteBtn><img src={deleteBtn} /></CardDeleteBtn>
            </CardHeader>
            <CardBody>
                {props.cardItems.map(
                    (item) =>
                        <CardItem
                            key={item.itemId}>
                            <input type="checkbox" defaultChecked={item.isChecked} />
                            <span>{item.itemText}</span>
                        </CardItem>)}
            </CardBody>
            <CardFooter>
                <CardFooterInput type="text" placeholder="Add to do..." />
            </CardFooter>
        </CardWrapper >
    )
