import axios from "axios";
const BASE_URL = "http://localhost:4040";

const initialState = {
    house:[],
    name:'',
    address:'',
    city:'',
    state:'',
    zip:0,
    img:'',
    mortgage:0,
    rent:0
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG = "UPDATE_IMG";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const SUBMIT_NEW_PROPERTY = "SUBMIT_NEW_PROPERTY";

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            // console.log(action.payload);
            return { ...state, name: action.payload };
        case UPDATE_ADDRESS:
            // console.log(action.payload);
            return { ...state, address: action.payload };
        case UPDATE_CITY:
            // console.log(action.payload);
            return { ...state, city: action.payload };
        case UPDATE_STATE:
            // console.log(action.payload);
            return { ...state, state: action.payload };
        case UPDATE_ZIP:
            // console.log(action.payload);
            return { ...state, zip: action.payload }
        case UPDATE_IMG:
            // console.log(action.payload);
            return { ...state, img: action.payload };
        case UPDATE_MORTGAGE:
            // console.log(action.payload);
            return { ...state, mortgage: action.payload };
        case UPDATE_RENT:
            // console.log(action.payload);
            return { ...state, rent: action.payload };
        case SUBMIT_NEW_PROPERTY:
            // console.log(action.payload);
            return {
                house: [...this.house, action.payload],
                name: action.payload,
                address: action.payload,
                city: action.payload,
                state: action.payload,
                zip: action.payload,
                img: action.payload,
                mortgage: action.payload,
                rent: action.payload
            };
        default:
            return state;
    }  
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    };
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    };
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    };
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    };
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    };
}

export function  updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    };
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    };
}

export function submitNewProperty(
    name,
    address,
    city,
    state,
    zip,
    img,
    mortgage,
    rent
) {
    console.log(
        "these are the values",
        name,
        address,
        city,
        state,
        zip,
        img,
        mortgage,
        rent
    );
    return {
        type: SUBMIT_NEW_PROPERTY,
        payload : axios
        .post(BASE_URL + "/api/add", {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        })
        .then(res => {
            return {
                house: [],
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                img: '',
                mortgage: 0,
                rent: 0
            };
        })
    };
}
export default reducer;