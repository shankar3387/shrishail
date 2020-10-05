import React, { Component, useState } from 'react';
import propTypes from 'prop-types';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import Community from './Community';

const Style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
    overflow: 'hidden',
    perspective: 1300,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  content: {
    position: 'relative',
    margin: '5% auto',
    width: '40%',
    height: '60%',
    padding: '20px',
    border: '1px solid rgba(0, 0, 0, .2)',
    background: '#fff',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: '0 5px 10px rgba(0, 0, 0, .3)',
  },
};
const ScaleUp = {
  transition: {
    // transition for the modal window
    property: 'all',
    duration: 300, // millisecond
    timingfunction: 'linear',
  },
  begin: {
    // beginning style of transition
    transform: 'scale(0.7)',
    opacity: 0,
  },
  end: {
    // end style of transition
    transform: 'scale(1)',
    opacity: 1,
  },
};
export default class CommunityModal extends Component {
  constructor(props, context,state) {
    super(props, context);

    this.childHandler = this.childHandler.bind(this);
  }
  
  childHandler = val => {
      console.log(this.props)
    console.log(this.state);
    // this.setState({ communityValue: val.label });
    localStorage.setItem('communityValue', val.label);
    console.log(`Selected: ${val.value}`);
    window.location.reload(false);
    console.log(localStorage.getItem('communityValue'))
    ModalManager.close();
  };

  render() {
    const { onRequestClose } = this.props;
    return (
      <Modal style={Style} onRequestClose={onRequestClose} effect={Effect.FlipHorizontal3D}>
        <h4 className="text-center">Choose your Community</h4>
        <from>
          <div>
            <Community logChange={this.childHandler} />
          </div>
          {/* <div className="mt-2 text-center ">
            <button className="btn btn-warning" onClick={ModalManager.close}>
              Submit
            </button>
          </div> */}
        </from>
      </Modal>
    );
  }
}
CommunityModal.propTypes = {
  onRequestClose: propTypes.any,
  ModalManager: propTypes.any,
};
//  class CommunityOpen extends Component{
//     openModal(){
//        const text = this.refs.input.value;
//        ModalManager.open(<MyModal text={text} onRequestClose={() => true}/>);
//     }
//     render(){
//        return (
//           <div>
//             <div><input type="text" placeholder="input something" ref="input" /></div>
//             <div><button type="button" onClick={this.openModal.bind(this)}>Open Modal </button> </div>
//           </div>
//        );
//     }
// }
