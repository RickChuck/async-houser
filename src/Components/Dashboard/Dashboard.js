import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/Header';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            house: []
        }
    }

    componentDidMount() {
        axios.get('/api/houses')
        .then(res => {
            this.setState({house: res.data})
        })
    }

    handleDelete(i) {
        axios.delete(`/api/deleteHouse/${i}`)
        .then(res => {
            this.setState({house: res.data})
        })
    }
    render() {
        return(
            <div className='dashboard'>
                <Header />
                <div className='childDashboard'>
                    <div className='newPropertyDiv'>
                        <Link to='/wizard/1'><button className='newPropertyButton'>Add New Property</button> </Link>
                    </div>
                    <div className='housesList'>
                    {
                        this.state.house.map((el, i) => {
                            return (
                                <div className='house' key={i}>
                                    <h4 className='houseName'>{`${el.house_name}`}</h4>
                                    <h4 className='address'>{`${el.house_address}`}</h4>
                                    <h4 className='city'>{`${el.city}`}</h4>
                                    <h4 className='state'>{`${el.houes_state}`}</h4>
                                    <h4 className='zipCode'>{`${el.zip_code}`}</h4>
                                    <h4 className='mortgage'>{`${el.mortgage}`}</h4>
                                    <h4 className='rent'>{`${el.rent}`}</h4>
                                    <button className='deleteBtn' onClick={() => this.handleDelete(el.house_id)}>Delete</button>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}