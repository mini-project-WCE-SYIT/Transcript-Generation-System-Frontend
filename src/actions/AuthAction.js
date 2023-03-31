import * as AuthApi from "../API/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
    try{
        const { data }  = await AuthApi.logIn(formData);
        console.log(data);
        dispatch({type: 'LOGIN_SUCCESS', data});
    }catch(err){
        console.log(err);
        dispatch({type: 'LOGIN_FAIL'});
    }
}
export const logOut = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" });
  };