import React, { Component } from "react";

export default function Column(props) {
    return (
        <div className="col-md-4">
            <div className="Column">
                <h3 className="text-center">{props.title}</h3>

                {
                    <ul>
                        {props.tasks.map((task, index) => {
                            return <li key={index}>{task.body}</li>;
                        })}
                    </ul>
                }
            </div>
        </div>
    );
}
