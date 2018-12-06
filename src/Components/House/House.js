import React from 'react';
import deleteAsset from '../../images/delete_button.png'

function House(props) {
    return (
        <div>
            <div className='house-info-container'>
                <img className='image-box' alt='propertyImage' src={props.house.img} />
                <div className='info-box'>
                    <button
                        className='delete'
                        onClick={() => props.delete(props.house.house_id)} ><img src={deleteAsset} alt='delete'/>
                        {" "}
                    </button>
                    <div className='info-display'>
                        <label>Property Name: </label>
                        {props.house.house_name}{" "}
                    </div>
                    <div className='info-display'>
                        <label>Address: </label>
                        {props.house.house_address}
                    </div>
                    <div className='info-display'>
                        <label>City: </label>
                        {props.house.city}
                    </div>
                    <div className='info-display'>
                        <label>State: </label>
                        {props.house.house_state}
                    </div>
                    <div className='info-display'>
                        <label>Zipcode: </label>
                        {props.house.zip_code}{" "}
                    </div>
                    <div className='info-box'>
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