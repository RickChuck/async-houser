import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import active from '../../images/step_active.png';
import inactive from '../../images/step_inactive.png';
import completed from '../../images/step_completed.png';
import {connect} from 'react-redux';
import {updateLoan, updateMonthlyMo, resetValues} from './../../dux/reducer';
import Headers from '../Header/Header';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #afd4c0;
    height: 100vh;
`
const Middle = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(to bottom, #e2f3ea, #ffffff);
    padding: 10px;
    > div {
        display: flex;
    }
    > img {
        margin: 0px 25px;
    }
    > input {
        width: 350px;
    }
    > h3 {
        text-align: left;
        margin-left: 140px;
        margin-bottom: 0
    }
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    background: #fec2c2;
    font-size: 18px;
    padding: 4px;
    border-radius: 3px;
    
`
const Button2 = styled.button`
    background: #3b5249;
    color: white;
    padding:6px 15px;
    border-radius: 3px;
    position: absolute;
    left: 35%;
`
const Button3 = styled.button`
    background: #3b5249;
    color: white;
    padding:6px 15px;
    border-radius: 3px;
    position: absolute;
    right: 35%;
`


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            loan_amount: '',
            monthly_mortgage: ''
        }
    }

    handleLoan = (e) => {
        this.props.updateLoan(e.target.value)
    }
    handleMonthly = (e)=> {
        this.props.updateMonthlyMo(e.target.value)
    }
    handleCancel = () => {
        this.props.resetValues()
    }

    render(){
        return(
            <Body>
                <Headers/>
                <Middle>
                    <Top>
                        <h3>Add new listing</h3>
                        <Link to={'/dashboard'}><Button onClick={this.handleCancel}>Cancel</Button></Link>
                    </Top>
                    <br/>
                    Step 4
                    <br/>
                    <br/>
                    <div/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={active} alt=""/>
                        <img src={inactive} alt=""/>
                    <div/>
                    <br/>
                    <h3>Loan Amount</h3> <input onChange={this.handleLoan} value={this.props.loan} type="text"/>
                    <h3>Monthly Mortgage</h3><input onChange={this.handleMonthly} value={this.props.monthlyMo} type="text"/>
                    <br/>
                    <br/>
                    <Link to={'/wizard/3'}><Button2>Previous Step</Button2></Link>
                    <Link to={'/wizard/5'}><Button3>Next Step</Button3></Link>
                </Middle>
            </Body>
        )
    }
}
function mapStateToProps(reduxState){
    return{
        loan: reduxState.loan_amount,
        monthlyMo: reduxState.monthly_mortgage
    }
}
export default connect(mapStateToProps, {updateLoan, updateMonthlyMo, resetValues})(Dashboard);