import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;


class AuthService {
    login( phone , password ){
        return axios.post(`${API_URL}/espresso/auth/login`,{
            phone,
            password,
        }).then(response => {
            // if response has data
            if( response.data.data ){
                localStorage.setItem('user',JSON.stringify(response.data.data));
            }
            // if no data maybe send error message
        });
    }

    logout(){
        localStorage.removeItem("user");
    }

    profile(){
        const { user_info } = JSON.parse(localStorage.getItem("user"));
        return user_info;
    }
}

export default new AuthService();

