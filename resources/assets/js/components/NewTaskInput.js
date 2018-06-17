import React, { Component } from "react";

export default function NewTaskInput(props) {
    return (
        <div className="col-md-4 offset-md-4">
            <form className="input-group mb-3" onSubmit={props.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="I'm thinking of ..."
                    value={props.value}
                    onChange={props.onChange}
                    required
                    minLength={5}
                />

                <div className="input-group-append">
                    <input
                        className="btn btn-outline-secondary"
                        type="submit"
                        value="+ Add Task"
                    />
                </div>
            </form>
        </div>
    );
}
