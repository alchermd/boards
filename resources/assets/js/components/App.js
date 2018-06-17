import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column";
import NewTaskInput from "./NewTaskInput";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTaskText: "",
            todo: [],
            doing: [],
            completed: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    addNewTask(task) {
        fetch("/api/tasks/", {
            body: JSON.stringify(task),
            credentials: "same-origin",
            headers: {
                "content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content")
            },
            method: "POST"
        })
            .catch(err => console.log(err))
            .then(res => this.setState({ todo: [...this.state.todo, task] }));
    }

    handleChange(event) {
        this.setState({ newTaskText: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ newTaskText: "" });
        this.addNewTask({ body: this.state.newTaskText, status: 0 });
    }

    render() {
        return (
            <div className="container-fluid pt-3">
                <h1 className="text-center">Kanban Board</h1>

                <div className="row flex-row flex-sm-nowrap">
                    <NewTaskInput
                        value={this.state.newTaskText}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />
                </div>

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
