import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQ, GET_TODOS_SUCCESS } from "../Constant/TodosConstants"


export const getAllTodos = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TODOS_REQ });
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({type: GET_TODOS_FAILED, payload: error.message});
    }
};