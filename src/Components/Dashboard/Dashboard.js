import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';
const BASE_URL = "http://localhost:4040";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            house: []
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
    }

    componentDidMount() {
        axios.get(BASE_URL + '/api/houses')
        .then(res => {
            console.log(res.body)
            this.setState({house: res.data});
        });
    };

    handleDelete = house_id => {
        axios.delete(BASE_URL + `/api/houses/${house_id}`).then(res => {
            if(res.statues === 200) {
                const newHouses = this.state.house.filter(house => {
                    return house.house_id !== house_id;
                });
                console.log(newHouses);
                this.setState({ house: newHouses });
            }
        });
    };

    refreshPage() {
        window.location.reload();
    }

    render() {
        console.log(this.state)
        return(
            <div className='dashboard'>
                <div className='pageHeader'>
                        <div className='newPropertyDiv'>
                            <Link to='/wizard/step1'>
                            <button className='newPropertyButton'>Add New Property</button></Link>
                        </div>
                </div>
                <div className='childDashboard'>
                    <div className='housesList'>
                    <h3>Home Listings</h3>
                    {
                        this.state.house.map(house => {
                            return (
                                <House 
                                    key={house.house_id}
                                    house={house}
                                    delete={this.handleDelete}
                                />
                                // <div className='house' key={i}>
                                //     <h4 className='houseName'>{`${el.house_name}`}</h4>
                                //     <h4 className='address'>{`${el.house_address}`}</h4>
                                //     <h4 className='city'>{`${el.city}`}</h4>
                                //     <h4 className='state'>{`${el.houes_state}`}</h4>
                                //     <h4 className='zipCode'>{`${el.zip_code}`}</h4>
                                //     <h4 className='mortgage'>{`${el.mortgage}`}</h4>
                                //     <h4 className='rent'>{`${el.rent}`}</h4>
                                //     <button className='deleteBtn' onClick={() => this.handleDelete(el.house_id)}>Delete</button>
                                // </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}