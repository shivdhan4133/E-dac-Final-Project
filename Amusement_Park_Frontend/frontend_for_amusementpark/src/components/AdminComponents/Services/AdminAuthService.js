import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/adminlogin12345/";

class AdminAuthServices{

    adminLogin(email,password){
        return axios.post(USER_API_BASE_URL+"login",{email,password}).then(response => {
            localStorage.setItem("admin",JSON.stringify(response.data));
        });
    };

    logout() {
        console.log("Signing out");
        localStorage.removeItem("admin");
     
    };

    register(admin) {
        return axios.post(USER_API_BASE_URL+"register",admin);
    };

    getCurrentAdmin() {
        return JSON.parse(localStorage.getItem("admin"));
    };

}
export default new AdminAuthServices();