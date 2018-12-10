import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import active from '../../images/step_active.png';
import inactive from '../../images/step_inactive.png';
import {connect} from 'react-redux';
import {updateName, updateDescrip, resetValues} from '../../dux/reducer';
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
        width: 350px
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
`



class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            property_name: '',
            property_descrip: ''
        }
    }

    handlePropName = (e) => {
        this.props.updateName(e.target.value)
    }
    handlePropDescrip = (e) => {
        this.props.updateDescrip(e.target.value)
    }
    handleCancel = () => {
        this.props.resetValues()
    }
    // handleChange = () => {
    //     this.props.updateName(this.state.property_name)
    //     this.props.updateDescrip(this.state.property_descrip)
    // }

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
                        Step 1
                        <br/>
                        <br/>
                    <div/>
                        <img src={active} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                        <img src={inactive} alt=""/>
                    <div/>
                        <h3>Property Name</h3><input type="text" onChange={this.handlePropName} value={this.props.name}/>
                        <br/>
                        <h3>Property Description </h3>
                        <textarea name="" id="" cols="56" rows="5" onChange={this.handlePropDescrip} value={this.props.descrip}></textarea>
                        <br/>
                        <br/>
                        <Link to={'/wizard/2'}><Button2>Next Step</Button2></Link>
                </Middle>
            </Body>
            
        )
    }
}
function mapStateToProps(reduxState){
    return {
        name: reduxState.property_name,
        descrip: reduxState.property_descrip       
    }
}
export default connect(mapStateToProps, {updateName, updateDescrip, resetValues})(Dashboard);