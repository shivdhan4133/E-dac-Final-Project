import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/rides";

class RideHandelingServices{
    
    getAllRides(){
        return axios.get(USER_API_BASE_URL+"/listall");
    }
    
    addRide(Ride){
        return axios.post(USER_API_BASE_URL+"/addride",Ride);
    }

    deleteRide(id){
        return axios.delete(USER_API_BASE_URL+"/delete/"+id);
    }
}

export default new RideHandelingServices();