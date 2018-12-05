import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';
const BASE_URL = "http://localhost:4040";

class Dashboard extends Component {
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
            <div className='page-container'>
                <div className='page-header'>
                            <Link to='/wizard/step1'>
                            <button className='new-prop-button'>Add New Property</button></Link>                      
                </div>
                    <h3>Home Listings</h3>
                    {this.state.house.map(house => {
                        return (
                            <House key={house.house_id} house={house} delete={this.handleDelete} />
                        );
                    })}
            </div>
        )
    }
}
export default Dashboard;