import React, { Component } from "react";

export default class Column extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="Column">
                    <h3 className="text-center">{this.props.title}</h3>
                </div>
            </div>
        );
    }
}
