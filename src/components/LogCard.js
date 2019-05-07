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
        const p = ['id', 'phase_title', 'text', 'timestamp'];
        const log_is_updated = p.some(item => {
            return prevProps.logData[item] !== this.state.logData[item];
        });
        if(log_is_updated)
            console.log('new logdata')
        if(log_is_updated)
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
            <div className={'card mb-3 shadow-sm'}>
                <div className={'card-header'}>
                    <div className={'row'}>
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
                                :   
                                    <span className={'d-flex row row justify-content-end'}>
                                        <button 
                                            className={'btn mr-lg-3 ml-lg-0 mr-3 ml-3 btn-outline-secondary col-lg-3'}
                                            onClick={this.edit_toggle_handler}
                                        >Edit
                                        </button>
                                        <button
                                            className={'btn mr-lg-0 ml-lg-1 mr-3 ml-3 btn-outline-danger col-lg-3'}
                                            onClick={() => this.state.deleteHandler(this.state.logData.id)}
                                        >Delete
                                        </button>
                                    </span>
                            }
                        </div>
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