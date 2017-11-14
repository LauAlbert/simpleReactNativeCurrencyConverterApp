import { FETCH_CURRENCY, FETCH_CONVERT, DELETE_CONVERT, UPDATE_CONVERT, UPDATE_AMOUNT } from '../actions/types';

const INITIAL_STATE = { current: "", userInput: 0, convertList: [], lastUpdate: "", rates: {}}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_CURRENCY:
            return {...state, current: action.payload.base, lastUpdate: action.payload.date, rates: action.payload.rates}
        case FETCH_CONVERT:
            // console.log(action.payload);
            // console.log([...state.convertList, {id: action.payload, amount: state.rates[action.payload] * state.userInput}]);

            return {...state, convertList: [...state.convertList, {id: action.payload, amount: (state.rates[action.payload] * state.userInput).toFixed(3)}] }
        case DELETE_CONVERT:
            const copy = state.convertList.slice();
            copy.splice(action.payload, 1);
            return {...state, convertList: copy}
        case UPDATE_AMOUNT:
            return {...state, userInput: action.payload}
        case UPDATE_CONVERT:
            return {...state, convertList: state.convertList.map((item) => ({id: item.id, amount: (state.userInput * state.rates[item.id]).toFixed(3)}))};
        default:
            return state;
    }
}
