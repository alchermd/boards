import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
