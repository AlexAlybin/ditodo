import React from "react"

export class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    render() {
        return (
            <h1>Test Title</h1>
        )
    }
}