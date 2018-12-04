import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from '../../dux/reducer';

class Step1 extends Component {
    render() {
        console.log(this.props);
        const{
            updateName,
            updateAddress,
            updateCity,
            updateState,
            updateZip,
            name,
            address,
            city,
            state,
            zip 
        } = this.props;
        return (
            <div className='form-container'>
                <div className='inputs-container'>
                  <label>Property Name</label>  
                  <input value={name} onChange={e => updateName(e.target.value)} />
                  <label>Address</label>
                  <input value={address} onChange={e => updateAddress(e.target.value)} />
                  <label>City</label>
                  <input value={city} onChange={e => updateCity(e.target.value)} />
                  <label>State</label>
                  <input value={state} onChange={e => updateState(e.target.value)} />
                  <label>Zipcode</label>
                  <input value={zip} onChange={e => updateZip(e.target.value)} />
                </div>
                <div className='button-container'>
                    <Link className='next-step' to='/wizard/step2'>Next Step</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { name, address, zip } = state;
    return {
      name,
      address,
      city: state.city,
      state: state.state,
      zip
    };
}

export default connect(
    mapStateToProps,
    {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip
    }
)(Step1);