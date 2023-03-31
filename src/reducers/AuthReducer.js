const authReducer = ( state = { authData:null, error:false }, action ) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, authData:action.data,error:false }
        case 'LOGIN_FAIL':
            return {...state,authData:null,error:true}
        default:
            return state;
    }
};
export default authReducer;