import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export class Community extends Component {
  options = [
    { value: '1', label: 'Notting Hill', id: '1', Locality: '', Pincode: '', City: '', Builder: '' },
    { value: '2', label: 'Silver Oak' },
    { value: '3', label: 'Bagmane Temple Bells' },
    { value: '4', label: 'Mayberry' },
    { value: '5', label: 'Royale Gardens' },
    { value: '6', label: 'Hermitage' },
  ];

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    };
  }

//   logChange(val) {
//     console.log(`Selected: ${val.value}`);

//   }
//   logChange() {const { logChange } = this.props;}

  render() {
    const { logChange } = this.props;
    return (
      <div>
        <div>
          <Select name="form-field-name" options={this.options} onChange={logChange} />
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
