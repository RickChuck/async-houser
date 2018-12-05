import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    updateMortgage,
    updateRent,
    submitNewProperty
} from '../../dux/reducer';

class Step3 extends Component {
    onSubmitClick = () => {
        submitNewProperty();
    };
   
    render() {
        const {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        } = this.props;
        console.log(this.props)
        const { updateMortgage, updateRent, submitNewProperty} = this.props;
        return(
            <div className='form-container'>
                <div className='inputs-container'>
                    <label>Monthly Mortgage Amount:</label>
                    <input className='input' value={mortgage} onChange={e => updateMortgage(e.target.value)} />
                    <label>Desired Rent Amount:</label>
                    <input className='input' value={rent} onChange={e => updateRent(e.target.value)} />
                </div>
                <div className='button-container'>
                    <Link className='previous-step' to='/wizard/step2'>Previous</Link>
                    <Link className='complete-button' to='/'
                        onClick={() =>
                            submitNewProperty(
                                name,
                                address,
                                city,
                                state,
                                zip,
                                img,
                                mortgage,
                                rent
                            )
                        }
                    >Complete</Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}
export default connect (
    mapStateToProps,
    {
        updateMortgage, 
        updateRent,
        submitNewProperty
    }
)(Step3);