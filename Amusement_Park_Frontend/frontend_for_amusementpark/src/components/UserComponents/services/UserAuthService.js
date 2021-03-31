import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/api/";

class UserAuthService {

    login(email, password) {
        return axios.post(USER_API_BASE_URL+"login",{ email, password })
            .then(response => {
                    localStorage.setItem("user", JSON.stringify(response.data));
                
            })
    };

    logout() {
        console.log("Signing out");
        localStorage.removeItem("user");
        localStorage.clear();
     
    };

    // updateUser(user){

    //     localStorage.setItem("user",JSON.stringify(user));
    //     return axios.post(USER_API_BASE_URL+"register",user);

    // };
    getUserById(){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if(user === null)
        return null;
        else
        console.log("in get user by id"+user.id);
        return axios.get(USER_API_BASE_URL+"users/"+user.id).then(res => {
            localStorage.setItem("user",JSON.stringify(res.data));
        });
    };

    register(user) {
        return axios.post(USER_API_BASE_URL+"register",user);
    };

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    };

    addToCart(cart){
        return axios.post(USER_API_BASE_URL+"addtocart",cart)
    };
    deleteFromCart(cart){
        return axios.post(USER_API_BASE_URL+"deletefromcart",cart)
    };

}

export default new UserAuthService();