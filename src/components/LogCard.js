import React, { Component } from "react";

class LogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logData: this.props.logData,
            deleteHandler: this.props.deleteHandler,
            updateHandler: this.props.updateHandler,
            editText: null,
            editing: true
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.logData !== this.state.logData)
            this.setState({logData: this.props.logData})
    }

    edit_button_handler = () => {
        // this.state.editeHandler(this.state.logData.id, this.state.editText)
        console.log('edit')
    }

    update_button_handler = () => {
        this.state.updateHandler(this.state.logData.id, Date.now(), this.state.editText);
    }

    textarea_handler = (e) => {
        this.setState({editText: e.target.value});
    }
        
    render() {
        return (
            <div className={'card'}>
                <h5 className={'row card-header d-flex justify-content-between'}>
                    <div className={'col-sm-9'}>
                        {new Date(parseInt(this.state.logData.timestamp)).toString()}
                    </div>
                    <div className={'col-sm-3'}>
                        <div className={'row'}>
                            <button
                                className={'btn btn-danger col-4'}
                                onClick={() => this.state.deleteHandler(this.state.logData.id)}
                            >Delete
                            </button>
                            <button 
                                className={'btn btn-warning col-4'}
                                onClick={this.edit_button_handler}
                            >Edit
                            </button>
                            <button 
                                className={'btn btn-warning col-4'}
                                onClick={this.update_button_handler}
                            >Update
                            </button>
                        </div>
                    </div>
                </h5>
                <div className={'card-body'}>
                    {/* <h5 class="card-title">Special title treatment</h5> */}
                    <p className={'card-text'}>{this.state.logData.text}</p>
                    {this.state.editing
                        ? 
                            <textarea 
                                className={'form-control'} 
                                rows={3} 
                                defaultValue={this.state.logData.text} 
                                onChange={this.textarea_handler}
                            />
                        : 
                            null
                    }
                </div>
            </div>
        )
    }
}

export default LogCard;