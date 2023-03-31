import * as FormApi from "../API/FormRequest";

export const createTranscript = (formData) => async (dispatch) => {
    try {
        const { data } = await FormApi.createTranscript(formData);
        console.log(data);
        dispatch({ type: "CREATE_TRANSCRIPT", data });
    } catch (err) {
        console.log(err);
    }
};


export const getAllApplicants = () => async () => {
    try {
        console.log("hello");
        const  data  = await FormApi.getAllApplicants();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}