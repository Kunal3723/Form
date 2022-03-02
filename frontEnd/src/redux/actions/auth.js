import { CHECK, LOGIN } from "../constants/action-Types";
import * as api from "../../api/index.js";

export const signIn = (userData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(userData);

        dispatch({ type: LOGIN, data });
        navigate("/");
        dispatch({ type: CHECK, payload: true });
    } catch (error) {
        dispatch({ type: CHECK, payload: false });

    }
};