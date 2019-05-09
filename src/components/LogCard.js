import React, { Component } from "react";
import PropTypes from 'prop-types';

class LogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteHandler: this.props.deleteHandler,
            updateHandler: this.props.updateHandler,
            editText: null,
            editing: false
        }
    }

    edit_toggle_handler = () => {
        this.setState({editing: !this.state.editing});
    }

    update_button_handler = () => {
        this.props.updateHandler(this.props.logId, Date.now(), this.state.editText);
        this.setState({editing: false});
    }

    delete_button_handler = () => {
        this.props.deleteHandler(this.props.logId);
    }

    textarea_handler = (e) => {
        this.setState({editText: e.target.value});
    }
        
    render() {
        return (
            <div className={'card mb-3 shadow-sm'}>
                <div className={'card-header'}>
                    <div className={'row'}>
                        <div className={'col-lg-8 col-sm-12'}>
                            <span className={'row'}>
                                <span className={'col-lg-6 col-4'}>
                                    {this.props.phaseTitle}
                                </span>
                                <span className={'col-lg-6 col-8 text-lg-center text-right'}>
                                    {this.props.timestamp
                                        ? new Date(parseInt(this.props.timestamp)).toLocaleString()
                                        : null
                                    }
                                </span>
                            </span>
                        </div>
                        <div className={'col-lg-4 col-sm-12 justify-content-end'}>
                            {this.state.editing
                                ?   <span className={'d-flex row justify-content-end'}>
                                        <button 
                                            className={'btn mr-lg-3 ml-lg-0 mr-3 ml-3 btn-outline-primary col-lg-3'}
                                            onClick={this.edit_toggle_handler}
                                        >Cancel
                                        </button>
                                        <button 
                                            className={'btn mr-lg-0 ml-lg-1 mr-3 ml-3 btn-outline-success col-lg-3'}
                                            onClick={this.update_button_handler}
                                        >Update
                                        </button>
                                    </span>
                                :   <span className={'d-flex row row justify-content-end'}>
                                        <button 
                                            className={'btn mr-lg-3 ml-lg-0 mr-3 ml-3 btn-outline-secondary col-lg-3'}
                                            onClick={this.edit_toggle_handler}
                                        >Edit
                                        </button>
                                        <button
                                            className={'btn mr-lg-0 ml-lg-1 mr-3 ml-3 btn-outline-danger col-lg-3'}
                                            onClick={this.delete_button_handler}
                                        >Delete
                                        </button>
                                    </span>
                            }
                        </div>
                    </div>
                </div>
                <div className={'card-body'}>
                    {/* <h5 class="card-title">Special title treatment</h5> */}
                    <p className={'card-text'}>{this.props.text}</p>
                    {this.state.editing
                        ?   <textarea 
                                className={'form-control'} 
                                rows={3} 
                                defaultValue={this.props.text} 
                                onChange={this.textarea_handler}
                            />
                        :   null
                    }
                </div>
            </div>
        )
    }
}

LogCard.propTypes = {
    logId: PropTypes.object.isRequired,
    phaseTitle: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    updateHandler: PropTypes.func.isRequired,
 };

export default LogCard;