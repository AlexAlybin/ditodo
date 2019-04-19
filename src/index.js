import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Root } from "./pages/Root"
import { Header } from "./components/header/Header"

const App = () => (
    <Root />
)

const node = document.createElement('div')
document.body.appendChild(node)

ReactDOM.render(
    <App />,
    node
)



