import actionTypes from "../actions/actionType";

const initState = {
    homeData: [],
    test: 123
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state

        default:
            return state
    }
}

export default appReducer