import axios from '../../axios/global-config';

const url = 'setup/sex';
class Sex {
    // get all province or specific province code
    index( id = "" ){
        return axios.get(`${url}`,{
            params : { // parameter
                id // id : id
            }
        });
    }
}

export default new Sex();

