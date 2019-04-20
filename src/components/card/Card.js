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
`

const CardFooterInput = styled.input`
width: 80%;
border: none;
margin-left: 5px;
margin-bottom: 5px;
`

export const Card = () => (
    <CardWrapper>
        <CardHeader>
            <CardTitleInput type="text" placeholder="Type card title" />
            <CardDeleteBtn><img src={deleteBtn} /></CardDeleteBtn>
        </CardHeader>
        <CardBody></CardBody>
        <CardFooter>
            <CardFooterInput type="text" placeholder="Add todo..." />
        </CardFooter>
    </CardWrapper >
)