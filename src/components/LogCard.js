import React, { Component } from "react";

class LogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logData: this.props.logData,
            deleteHandler: this.props.deleteHandler,
            editHandler: this.props.editHandler,
            editText: null
        }
    }
        
    render() {
        return (
            <div className={'card'}>
                <h5 className={'card-header d-flex justify-content-between'}>
                    {new Date(parseInt(this.state.logData.timestamp)).toString()}
                    <span className={''}>
                        <button
                            className={'btn btn-danger'}
                            onClick={() => this.state.deleteHandler(this.state.logData.id)}
                        >
                            Delete
                        </button>
                        <button 
                            className={'btn btn-warning'}
                            onClick={() => this.state.editeHandler(this.state.logData.id, this.state.editText)}
                        >Edit</button>
                    </span>
                </h5>
                <div className={'card-body'}>
                    {/* <h5 class="card-title">Special title treatment</h5> */}
                    <p className={'card-text'}>{this.state.logData.text}</p>
                </div>
            </div>
        )
    }
}

export default LogCard;