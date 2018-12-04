import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


class Wizard extends Component {
    render() {
        return(
            <div className='wizard'>
                <div className='wizard-header'>
                    <h2>Add New Listing</h2>
                    <Link to='/' ><button className='cancel-button'>Cancel</button></Link>
                </div>
                <div className='childWizard'>
                    <Switch>
                        <Route path='/wizard/step1' component={Step1} />
                        <Route path='/wizard/step2' component={Step2} />
                        <Route path='/wizard/step3' component={Step3} />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Wizard;