import axios from 'axios';
import {
    FETCH_CURRENCY,
    FETCH_CONVERT,
    DELETE_CONVERT,
    UPDATE_AMOUNT,
    UPDATE_CONVERT
} from './types';

const ROOT_URL = 'https://api.fixer.io/latest?base=';

export const fetchCurrency = (currency) => async (dispatch) => {
    try {
        const url = ROOT_URL+currency;
        let {data} = await axios.get(url);
        dispatch({type: FETCH_CURRENCY, payload: data});
    } catch(e) {
        console.error(e);
    }
}

export const fetchConvert = (currency) => {
    return ({type: FETCH_CONVERT, payload: currency})
}

export const deleteConvert = (index) => {
    return ({type: DELETE_CONVERT, payload: index})
}

export const updateConvert = () => {
    return ({type: UPDATE_CONVERT})
}

export const updateAmount = (amount) => {
    return ({type: UPDATE_AMOUNT, payload: amount})
}