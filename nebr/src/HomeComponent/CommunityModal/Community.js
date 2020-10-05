import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export class Community extends Component {
  options = [
    { value: "1", label: 'Notting Hill' },
    { value: '2', label: 'Silver Oak' },
    { value: '3', label: 'Bagmane Temple Bells' },
    { value: '4', label: 'Mayberry' },
    { value: '5', label: 'Royale Gardens' },
    { value: '6', label: 'Hermitage' },
  ];


  handleChange = (selectedOption) => {
    const { logChange } = this.props;
    logChange(selectedOption.value)

  }


  render() {
    const { logChange, selectedValue = "", name } = this.props;
    console.log(logChange, selectedValue, name, "community")
    return (
      <div>
        <div>
          <Select options={this.options} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
Community.propTypes = {
  history: PropTypes.any,
  logChange: PropTypes.any,
};
export default Community;
