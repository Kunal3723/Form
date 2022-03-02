import { FETCH, DELETE, CREATE } from "../constants/action-Types";
import * as api from "../../api/index.js";

export const getAllInfo = () => async (dispatch) => {
    try {
        const { data } = await api.fetchInfo();

        dispatch({ type: FETCH, payload: data });


    } catch (error) {
        console.log(error);

    }
};
export const create = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createInfo(formData);

        dispatch({ type: CREATE, payload: data });


    } catch (error) {
        console.log(error);

    }
};
export const InfoDelete = (id) => async (dispatch) => {
    try {
        await api.deleteInfo(id);

        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);

    }
};