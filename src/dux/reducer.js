// state
let initialState = {
    user: {},
    username: '',
    password: '',
    property_name: '',
    property_descrip: '',
    address: '',
    city: '',
    my_state: '',
    zip: 0,
    img_url: '',
    loan_amount: 0,
    monthly_mortgage: 0,
    desired_rent: 0
}

// constants
const NAME = 'NAME';
const DESCRIP = 'DESCRIP';
const ADDRESS = 'ADDRESS';
const CITY = 'CITY';
const MYSTATE = 'MYSTATE';
const ZIP = 'ZIP';
const IMG = 'IMG';
const LOAN = 'LOAN';
const MONTHLYMO = 'MONTHLYMO';
const DESIRED = 'DESIRED';
const RESET_INFO = 'RESET_INFO'


// reducer
export default function reducer(state=initialState, action){
    console.log(22, action)
    switch(action.type){
        // wizard 1
        case NAME:
            return Object.assign({}, state, {property_name: action.payload})
        case DESCRIP:
            return Object.assign({}, state, {property_descrip: action.payload})
        // wizard 2
        case ADDRESS:
            return Object.assign({}, state, {address: action.payload})
        case CITY:
            return Object.assign({}, state, {city: action.payload})
        case MYSTATE:
            console.log(33, 'did this work')
            return Object.assign({}, state, {my_state: action.payload})
        case ZIP:
            return Object.assign({}, state, {zip: action.payload})
        // wizard 3
        case IMG:
            return Object.assign({}, state, {img_url: action.payload})
        // wizard 4
        case LOAN:
            return Object.assign({}, state, {loan_amount: action.payload})
        case MONTHLYMO:
            return Object.assign({}, state, {monthly_mortgage: action.payload})
        // wizard 5
        case DESIRED:
            return Object.assign({}, state, {desired_rent: action.payload})
        case RESET_INFO:
            return initialState
        default: 
            return state;
    }
}

// action creators
export function updateName(property_name){
    return{
        type: NAME,
        payload: property_name
    }
}
export function updateDescrip(property_descrip){
    return{
        type: DESCRIP,
        payload: property_descrip
    }
}
export function updateAddress(address){
    return{
        type: ADDRESS,
        payload: address
    }
}
export function updateCity(city){
    return{
        type: CITY,
        payload: city
    }
}
export function updateMyState(my_state){
    return{
        type: MYSTATE,
        payload: my_state
    }
}
export function updateZip(zip){
    return{
        type: ZIP,
        payload: zip
    }
}
export function updateImg(img_url){
    return{
        type: IMG,
        payload: img_url
    }
}
export function updateLoan(loan_amount){
    return{
        type: LOAN,
        payload: loan_amount
    }
}
export function updateMonthlyMo(monthly_mortgage){
    return{
        type: MONTHLYMO,
        payload: monthly_mortgage
    }
}
export function updateDesired(desired_rent){
    return{
        type: DESIRED,
        payload: desired_rent
    }
}
export function resetValues(){
    return {
        type: RESET_INFO
    }
}