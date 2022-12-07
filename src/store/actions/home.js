import actionTypes from "./actionType";
import * as api from '../../api'


export const getHome = () => async (dispatch) => {
    try {
        const res = await api.getHome()
        console.log(res)
        if (res?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: res.data.data.items
            })
        } else {
            dispatch({
                type: actionTypes.GET_HOME,
                homeData: null
            })
        }

    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOME,
            homeData: null
        })
    }
}
