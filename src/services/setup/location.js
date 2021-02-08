import axios from '../../axios/global-config';

const url = 'setup/location';
class locationService {
    // get all province or specific province code
    province( code = "" ){
        return axios.get(`${url}/provinces`,{
            params : { // parameter
                code // code : code
            }
        });
    }
    // get all district or district with specific province
    district( province = "" ){
        return axios.get(`${url}/districts`,{
            params : { // parameter
                province // province : province
            }
        });
    }

    // get all commune or commune with specific district
    commune( district = "" ){
        return axios.get(`${url}/communes`,{
            params : { // parameter
                district // district : district
            }
        });
    }
    // get all village or village with specific commune
    village( commune = "" ){
        return axios.get(`${url}/villages`,{
            params : { // parameter
                commune // commune : commune
            }
        });
    }
}

export default new locationService();

