import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';

import { ContentService } from '../services/ContentService';

export default class DropButton extends React.Component<
    {
        loginData?: {
            username: string;
            name: string;
            email: string;
            csrfToken: string;
        };
        loginMessage?: string;
    }
> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="">
                        {/* <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span> */}
                    </div>
                    <div className="">
                        <button
                            className="btn btn-secondary"
                        // onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-info m-2"
                        // onClick={() => this.props.onDecrement(this.props.counter)}
                        // disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                        // onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-secondary"
                        // onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-info m-2"
                        // onClick={() => this.props.onDecrement(this.props.counter)}
                        // disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                        // onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-secondary"
                        // onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-info m-2"
                        // onClick={() => this.props.onDecrement(this.props.counter)}
                        // disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                        // onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-secondary"
                        // onClick={() => this.props.onIncrement(this.props.counter)}
                        >
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-info m-2"
                        // onClick={() => this.props.onDecrement(this.props.counter)}
                        // disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger"
                        // onClick={() => this.props.onDelete(this.props.counter.id)}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
            
        );
    }
}
