import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import NumberFormat from 'react-number-format';
import axios from 'axios';
import icon from '../../images/delete_button.png';
import styled from 'styled-components';
import Headers from './../Header/Header';


const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #afd4c0;
    height: auto;
    width: auto;
`
const Middle = styled.div`

    width: 75%;
    height: 100%;
    background: linear-gradient(to bottom, #e2f3ea, #ffffff);
    padding: 10px;
    > input {
        width: 60px;
    }
`
const Button = styled.button`
    background: #8aea92;
    font-size: 18px;
    padding: 8px;
    border-radius: 3px;
`
const Listing = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: auto;
    background: lightgray;
    border-radius: 2px;
`
const Name = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 70%;
    padding-left: 5px;
    padding-right: 5px;
    > p {
        font-size: 12px;
        text-align: start;
        margin: 5px;
    }
    
`
const Pic = styled.div`
    width: 30vw;
    height: 30vh;
    margin: 15px;
    > img {
        width: 25vw;
        height: 30vh;
        border-radius: 2px;
    }
`
const Other = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    font-weight: 600;
    > li {
        font-size: 14px;
        list-style-type: none;
        padding-left: 8px;
    }
`
const Button2 = styled.button`
    background: #8aea92;
    color: black;
    padding:4px 8px;
    border-radius: 3px;
    margin-left: 10px;
`
const Button3 = styled.button`
    background: #3b5249;
    color: white;
    padding:4px 8px;
    border-radius: 3px;
    margin-left: 4px;
`


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            listings: [],
            price: 0,
            input: ''
            
        }
    }
    componentDidMount(){
        axios.get('/api/properties')
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
    }
    delete = (id) => {
        console.log(66, id)
        axios.delete(`/api/properties/${id}`)
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
    }
    logout = () => {
        axios.post('/api/auth/logout')
        .then(res => {
            console.log('tis working')
            this.props.history.push('/')
        })
    }
    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    handleReset = () => {
        this.setState({
            price: 0,
            input: ''
        })
    }
    handleClick = () => {
        this.setState({
            price: this.state.input
        })
    }

    render(){
        console.log(this.state)
        let listingsDisplay = this.state.listings.filter((item, index)=>{
            let stringd = item.desired_rent.substring(1)
            if( stringd > +this.state.price){
                return true
            } else {
                return false
            }
        }).map((el, i) => {
            console.log()
            return (
                <Listing key={i}>
                    <Pic>
                        <img src={el.img_url} alt=""/>
                    </Pic>
                    <Name>
                        <h3>{el.property_name}</h3>
                        <p>{el.property_descrip}</p>
                    </Name>
                    <hr/>
                    <Other>
                        <li>Loan: {el.loan_amount}</li>
                        <li>Monthly Mortgage: {el.monthly_mortgage}</li>
                        <li>Desired Rent: {el.desired_rent}</li>
                        <li>Address: {el.address}</li>
                        <li>City: {el.city}</li>
                        <li>State: {el.my_state}</li>
                        <li>Zip: {el.zip}</li>
                    </Other>
                        <div onClick={() => this.delete(el.id)}>
                            <img src={icon} className='icon' alt=""/>
                        </div>
                </Listing>
            )
        })
        return(
            <Body>
                <Headers/>
                <Middle>
                    <Link to={'/wizard/1'}><Button>Add new property</Button></Link>
                    <br/>
                    <br/>
                    List properties with "Desired Rent" greater than: $ <input displayType={'number'} onChange={this.handleInput}
                        value={this.state.input} />
                    <Button2 onClick={this.handleClick}>Filter</Button2>
                    <Button3 onClick={this.handleReset}>Reset</Button3>
                    <br/>
                    <br/>
                    <hr/>
                    <h3>Home Listings</h3>
                    {listingsDisplay}
                </Middle>
            </Body>
        )
    }

    newMethod() {
        return 4040;
    }
}
export default Dashboard;