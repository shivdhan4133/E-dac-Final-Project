import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/api/";


class UserControlServices{

    getAllUsers(){
        return axios.get(USER_API_BASE_URL+"users")
    }

}

export default new UserControlServices();