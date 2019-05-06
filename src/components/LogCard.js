import React, { Component } from "react";
import PropTypes from 'prop-types';

class LogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logData: this.props.logData,
            deleteHandler: this.props.deleteHandler,
            updateHandler: this.props.updateHandler,
            editText: null,
            editing: false
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.logData !== this.state.logData)
            this.setState({logData: this.props.logData})
    }

    edit_toggle_handler = () => {
        this.setState({editing: !this.state.editing})
    }

    update_button_handler = () => {
        this.state.updateHandler(this.state.logData.id, Date.now(), this.state.editText);
        this.setState({editing: false})
    }

    textarea_handler = (e) => {
        this.setState({editText: e.target.value});
    }
        
    render() {
        console.log(this.state.logData)
        return (
            <div className={'card'}>
                <h5 className={'row card-header d-flex justify-content-between'}>
                    <div className={'col-lg-8'}>
                        {new Date(parseInt(this.state.logData.timestamp)).toLocaleString()}
                    </div>
                    <div className={'col-lg-4 d-flex justify-content-end'}>
                        {this.state.editing
                            ?
                                <button 
                                    className={'btn btn-warning'}
                                    onClick={this.edit_toggle_handler}
                                >Cancel
                                </button>
                            :   
                                <button 
                                    className={'btn btn-warning'}
                                    onClick={this.edit_toggle_handler}
                                >Edit
                                </button>
                        }
                        {this.state.editing
                            ?
                                <button 
                                    className={'btn btn-warning'}
                                    onClick={this.update_button_handler}
                                >Update
                                </button>
                            : 
                                null
                        }
                        <button
                            className={'btn btn-danger'}
                            onClick={() => this.state.deleteHandler(this.state.logData.id)}
                        >Delete
                        </button>
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

LogCard.propTypes = {
    logData: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    updateHandler: PropTypes.func.isRequired,
 };

export default LogCard;