import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column";

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid pt-3">
                <h1 className="text-center">Kanban Board</h1>

                <div className="row flex-row flex-sm-nowrap py-5">
                    <Column title="To-Do" />
                    <Column title="Doing" />
                    <Column title="Completed" />
                </div>
            </div>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
