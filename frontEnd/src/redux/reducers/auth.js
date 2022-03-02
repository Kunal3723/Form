import { LOGIN } from "../constants/action-Types";

const authReducers = (state = { authData: null }, action) => {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))

            return { ...state, authData: action?.data };
        default:
            return state;
    }
};
export default authReducers;