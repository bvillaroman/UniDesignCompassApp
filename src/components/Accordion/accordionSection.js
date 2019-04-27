import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label, this.props.change);
  };

  render() {
    const {onClick, props: { isOpen, label, change }} = this;

    return (
      <div style={{
          background: isOpen ? '#EBEBEB' : '#FFFFFF',
          borderTop: '1px solid #008f68',
          // borderBottom: '1px solid #008f68',
          padding: '5px 10px',
        }}>
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
          <div className="row">
            <h3 className="label col-3">{label}</h3>
            <span className="col-6">{change}</span>
            <div style={{ float: 'right' }}>
              {!isOpen && <span>&#9650;</span>}
              {isOpen && <span>&#9660;</span>}
            </div>
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#EBEBEB',
              marginTop: 10,
              padding: '10px 20px',
            }}>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
