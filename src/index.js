import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { Root } from "./pages/Root"

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
)

const node = document.createElement('div')
document.body.appendChild(node)

const bodyCSS = "min-height: 100%; margin: 0; padding: 0; background-color: #e4e4e4;"

document.body.style.cssText = bodyCSS;

ReactDOM.render(
    <App />,
    node
)



