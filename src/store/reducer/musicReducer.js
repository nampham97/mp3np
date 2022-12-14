import actionTypes from "../actions/actionType";

const initState = {
    curSongId: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
            }

        default:
            return state
    }
}

export default musicReducer