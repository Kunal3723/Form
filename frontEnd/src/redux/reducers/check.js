import { CHECK } from "../constants/action-Types";

const checkReducers = (state =  true , action) => {
    switch (action.type) {
        case CHECK:
            
            return action.payload;
        default:
            return state;
    }
};
export default checkReducers;