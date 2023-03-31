import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/v1/applicants" });

export const createTranscript =  (formData) => API.post("/createtranscript", formData);

export const getAllApplicants = () => API.get('/getallapplications');