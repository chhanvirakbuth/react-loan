import axios from 'axios';
import authHeader from "../services/auth/header";

export default axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        'Accept'        : 'application/json',
        'Authorization' : authHeader().Authorization
    }
});
