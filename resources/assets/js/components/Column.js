import React, { Component } from "react";

export default function Column(props) {
    return (
        <div className="col-md-4">
            <div className="Column">
                <h3 className="text-center">{props.title}</h3>

                {
                    <ul>
                        {props.tasks.map((task, index) => {
                            return (
                                <li key={index}>
                                    {task.body}

                                    <div>
                                        {props.controls.map(
                                            (control, index) => {
                                                return (
                                                    <span
                                                        style={{
                                                            color: "blue",
                                                            textDecoration:
                                                                "underline",
                                                            cursor: "pointer",
                                                            display:
                                                                "inline-block",
                                                            margin: "2px 5px"
                                                        }}
                                                        key={index}
                                                    >
                                                        {control}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
        </div>
    );
}
