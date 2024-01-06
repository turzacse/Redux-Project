import { GET_TODOS_FAILED, GET_TODOS_REQ, GET_TODOS_SUCCESS } from "../Constant/TodosConstants";

const intialState = {
    isLoading: false,
    todos: [],
    error: null
};

const todosReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQ:
            return {
                ...state,
                isLoading: true,
            }

        case GET_TODOS_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null,
            }

        case GET_TODOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload,
            }

        default:
            return state;
    }
}

export default todosReducer;