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
        // console.log(this.state.logData)
        return (
            <div className={'card'}>
                <div className={'row card-header d-flex justify-content-between'}>
                    <div className={'col-lg-8 col-sm-12'}>
                        <span className={'row'}>
                            <span className={'col-lg-6 col-8'}>
                                {new Date(parseInt(this.state.logData.timestamp)).toLocaleString()}
                            </span>
                            <span className={'col-lg-6 col-4 text-lg-center text-right'}>
                                {this.state.logData.phase_title}
                            </span>
                        </span>
                    </div>
                    <div className={'col-lg-4 col-sm-12 justify-content-end'}>
                        {this.state.editing
                            ?
                                <span className={'d-flex row justify-content-end'}>
                                    <button 
                                        className={'btn btn-outline-primary col-lg-3 col-sm-6'}
                                        onClick={this.edit_toggle_handler}
                                    >Cancel
                                    </button>
                                    <button 
                                        className={'btn btn-outline-success col-lg-3 col-sm-6'}
                                        onClick={this.update_button_handler}
                                    >Update
                                    </button>
                                </span>
                            :   
                                <span className={'d-flex row row justify-content-end'}>
                                    <button 
                                        className={'btn btn-outline-secondary col-lg-3 col-sm-6'}
                                        onClick={this.edit_toggle_handler}
                                    >Edit
                                    </button>
                                    <button
                                        className={'btn btn-outline-danger col-lg-3 col-sm-6'}
                                        onClick={() => this.state.deleteHandler(this.state.logData.id)}
                                    >Delete
                                    </button>
                                </span>
                        }
                    </div>
                </div>
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