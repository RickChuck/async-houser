import React from 'react';

function House(props) {
    return (
        <div>
            <div className='houseInfo'>
                <img className='img' alt='propertyImage' src={props.house.img} />
                <div className='infoBox'>
                    <button
                        className='delete'
                        onClick={() => props.delete(props.house.house_id)}>
                        {" "}
                    </button>
                    <div className='infoDisplay'>
                        <label>Property Name: </label>
                        {props.house.house_name}{" "}
                    </div>
                    <div className='infoDisplay'>
                        <label>Address: </label>
                        {props.house.house_address}
                    </div>
                    <div className='infoDisplay'>
                        <lable>City: </lable>
                        {props.house.city}
                    </div>
                    <div className='infoDisplay'>
                        <label>State: </label>
                        {props.house.house_state}
                    </div>
                    <div className='infoDisplay'>
                        <label>Zipcode: </label>
                        {props.house.zip_code}{" "}
                    </div>
                    <div className='infoBox'>
                        <label>Monthly Mortgage Amount: </label>
                        {props.house.mortgage}{" "}
                        <label>Desired Monthly Rent: </label>
                        {props.house.rent}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default House;