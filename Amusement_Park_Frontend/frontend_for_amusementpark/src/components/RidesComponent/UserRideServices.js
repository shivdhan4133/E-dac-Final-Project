import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/rides";

class UserRideServices{
    
    getAllRides(){
        return axios.get(USER_API_BASE_URL+"/listall");
    };
    getRideById(id){

        return axios.get(USER_API_BASE_URL+"/listall/"+id);

    };
    

}
export default new UserRideServices(); 