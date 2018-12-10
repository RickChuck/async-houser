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
    align-content: center;
    > h4{
        position: absolute;
        right: 310px;
        color: white;
    }
`
const Div1 = styled.div`
    position: absolute;
    left: 350px;
    > h2 {
        color: white;
        }
`
const Div2 = styled.div`
    position: absolute;
    left: 444px;
    > h2 {
        color: white;
        font-weight: normal;
        }
`
const Logo = styled.div`
    position: absolute;
    left: 300px;
    > img{
        width: 35px;
        padding-top: 17px;
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