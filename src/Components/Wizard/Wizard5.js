import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import active from '../../images/step_active.png';
import completed from '../../images/step_completed.png';
import {connect} from 'react-redux';
import {updateDesired, resetValues} from '../../dux/reducer';
import axios from 'axios';
import Headers from '../Header/Header';


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #afd4c0;
    height: 100vh;
`
// const Header = styled.div`
//     width: 100%;
//     height: 65px;
//     background: #519872;
//     display: flex;
//     align-content: center;
//     > h4 {
//         position: absolute;
//         right: 290px;
//         color: white;
//     }
//     > div{
//         padding-left: 10px;
//         > h2 {
//         color: white;
//         }
//     }
// `
// const Logo = styled.div`
//     > img{
//         width: 35px;
//         padding-top: 17px;
//     }
// `
const Middle = styled.div`
    width: 50%;
    height: 100%;
    background: linear-gradient(to bottom, #e2f3ea, #ffffff);
    padding: 10px;
    > div {
        display: flex;
    }
    > input {
        width: 350px;
    }
    > img {
        margin: 0px 25px;
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
    background: #8aea92;
    color: black;
    padding:6px 15px;
    border-radius: 3px;
    position: absolute;
    right: 35%;
`
const Button3 = styled.button`
    background: #3b5249;
    color: white;
    padding:6px 15px;
    border-radius: 3px;
    position: absolute;
    left: 35%;
`

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            desired_rent: ''
        }
    }
    
    handleCancel = () => {
        this.props.resetValues()
    }

    handleDesiredRent = (e) => {
        this.props.updateDesired(e.target.value)
    }

    createListing = () => {
        console.log(this.props.my_state)
        axios.post('/api/properties', {
            property_name: this.props.name,
            property_descrip: this.props.descrip,
            address: this.props.address,
            city: this.props.city,
            myState: this.props.myState,
            zip: this.props.zip,
            img_url: this.props.img,
            loan_amount: this.props.loan,
            monthly_mortgage: this.props.monthlyMo,
            desired_rent: this.props.desired
        }).then(res => {
            this.props.resetValues()
            this.props.history.push('/dashboard')
        })
    }

    render(){
        const sum = +this.props.monthlyMo * 1.25
        return(
            <Body>
                <Headers/>
                <Middle>
                    <Top>
                        <h3>Add new listing</h3>
                        <Link to={'/dashboard'}><Button onClick={this.handleCancel}>Cancel</Button></Link>
                    </Top>
                    <br/>
                    Step 5
                    <br/>
                    <br/>
                    <div/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={completed} alt=""/>
                        <img src={active} alt=""/>
                    <div/>
                    <br/>
                    Recommended Rent ${sum}
                    <br/>
                    <h3>Desired Rent</h3> <input onChange={this.handleDesiredRent} value={this.props.desired}type="text"/>
                    <br/>
                    <br/>
                    <Link to={'/wizard/4'}><Button3>Previous Step</Button3></Link>
                    <Button2 onClick={this.createListing}>Complete</Button2>
                </Middle>
            </Body>
        )
    }
}
function mapStateToProps(reduxState){
    console.log(44, reduxState)
    return{
        desired: reduxState.desired_rent,
        name: reduxState.property_name,
        descrip: reduxState.property_descrip,
        address: reduxState.address,
        city: reduxState.city,
        myState: reduxState.my_state,
        zip: reduxState.zip,
        img: reduxState.img_url,
        loan: reduxState.loan_amount,
        monthlyMo: reduxState.monthly_mortgage,
    }
}
export default connect(mapStateToProps, {updateDesired, resetValues})(Dashboard);