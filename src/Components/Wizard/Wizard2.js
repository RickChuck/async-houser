import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import active from '../../images/step_active.png';
import inactive from '../../images/step_inactive.png';
import completed from '../../images/step_completed.png';
import {connect} from 'react-redux';
import {updateAddress, updateCity, updateMyState, updateZip, resetValues} from './../../dux/reducer';
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
    > input{
        width: 260px;
    } 
    > h3 {
        text-align: left;
        margin-left: 185px;
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

// -->> Code <<--
class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            address: '',
            city: '',
            my_state: '',
            zip: ''
        }
    }
    
    handleAddress = (e) => {
        this.props.updateAddress(e.target.value)
    }
    handleCity = (e) => {
        this.props.updateCity(e.target.value)
    }
    handleState = (e) => {
        console.log(e.target.value)
        this.props.updateMyState(e.target.value)
    }
    handleZip = (e) => {
        this.props.updateZip(e.target.value)
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
                    Step 2
                    <br/>
                    <br/>
                    <div/>
                        <img src={completed} alt=""/>
                        <img src={active} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                    <div/>
                    <br/>
                    <h3>Address</h3> <input onChange={this.handleAddress} value={this.props.address}type="text"/>
                    <h3>City</h3> <input onChange={this.handleCity}  value={this.props.city} type="text"/>
                    <h3>State</h3> <input onChange={this.handleState} value={this.props.myState} type="text"/>
                    <h3>Zip</h3> <input onChange={this.handleZip} value={this.props.zip} type="text"/>
                    <br/> 
                    <br/>
                    <Link to={'/wizard/1'}><Button2>Previous Step</Button2></Link>
                    <Link to={'/wizard/3'}><Button3>Next Step</Button3></Link>
                </Middle>
            </Body>
        )
    }
}
function mapStateToProps(reduxState){
    return{
        address: reduxState.address,
        city: reduxState.city,
        myState: reduxState.my_state,
        zip: reduxState.zip
    }
}
export default connect(mapStateToProps, {updateAddress, updateCity, updateMyState, updateZip, resetValues})(Dashboard);