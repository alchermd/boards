import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: [],
            doing: [],
            completed: []
        };
    }

    componentDidMount() {
        fetch("/api/tasks")
            .then(res => res.json())
            .then(tasks =>
                tasks.forEach(task => {
                    switch (task.status) {
                        case 0:
                            this.setState({
                                todo: [...this.state.todo, task]
                            });
                            break;
                        case 1:
                            this.setState({
                                doing: [...this.state.doing, task]
                            });
                            break;
                        case 2:
                            this.setState({
                                completed: [...this.state.completed, task]
                            });
                            break;
                    }
                })
            );
    }

    render() {
        return (
            <div className="container-fluid pt-3">
                <h1 className="text-center">Kanban Board</h1>

                <div className="row flex-row flex-sm-nowrap py-5">
                    <Column title="To-Do" tasks={this.state.todo} />
                    <Column title="Doing" tasks={this.state.doing} />
                    <Column title="Completed" tasks={this.state.completed} />
                </div>
            </div>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
