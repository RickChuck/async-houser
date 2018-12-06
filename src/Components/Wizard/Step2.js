import React, { Component } from "react";
import { connect } from "react-redux";
import { updateImg } from "../../dux/reducer";
import { Link } from "react-router-dom";

class Step2 extends Component {
    render() {
        // console.log(this.props)
        return(
            <div className='form-container'>
                <div className='inputs-container'>
                    <label>Image URL</label>
                    <input value={this.props.img} onChange={e => this.props.updateImg(e.target.value)} />
                </div>
                <div className='button-container'>
                    <Link className='previous-step' to='/wizard/step1'>Previous</Link>
                    <Link className='next-step' to='/wizard/step3'>Next Step</Link>
                </div>

            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img
    };
}
export default connect(
    mapStateToProps,
    {updateImg}
)(Step2);