import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from '../../images/header_logo.png';
import {withRouter} from 'react-router-dom';

const Header = styled.div`
    width: 100%;
    height: 65px;
    background: #519872;
    display: flex;
    padding: 10px;
    z-index: 1;
    align-content: center;
    > h4{
        color: white;
        position: absolute;
        right: 15%;
        top: 21px;
    }
`
const Div1 = styled.div`
    margin: 10px;
    > h2 {
        color: white;
        }
`
const Div2 = styled.div`
  margin: 10px;
    > h2 {
      color: white;
      font-weight: normal;     
`
const Logo = styled.div`
    > img{
        width: 35px;
        padding-top: 17px;
        margin: 10px;
    }
`


class Headers extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    logout = () => {
        console.log(this.props)
        axios.post('/api/auth/logout').then(res => {
            console.log('tis working')
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <Header>
                <Logo>
                    <img src={logo} alt=""/>
                </Logo>
                <Div1>
                    <h2>Houser</h2>
                </Div1>
                <Div2>
                    <h2>Dashboard</h2>
                </Div2>
                <h4 onClick={this.logout}>Logout</h4>
            </Header>
        )
    }
}
export default withRouter(Headers);