import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/booking";

class CartServices {

    sendForm(form) {
        console.log(JSON.stringify(form));
        return axios.post(USER_API_BASE_URL + "/book", form);
    }
    processPayment(paymentRequest, form) {
        console.log(paymentRequest);
        console.log(form);
        return axios.post(USER_API_BASE_URL + "/pay", paymentRequest).then(res => {
            if (res.data === "Invalid Credentials Aborting Payment") {
                console.log("Invalid")
                return "Invalid Credentials Aborting Payment Session";
            }
            else {
                console.log("Success")
                this.sendForm(form).then(res => {
                    localStorage.removeItem("form");
                })

            }
        })
    };
    getForms() {
        axios.get(USER_API_BASE_URL + "/bookinglist").then(res => {
            localStorage.setItem("mybooking", JSON.stringify(res.data));
        })
    }
    getFormById() {
        const userid = { userid: JSON.parse(localStorage.getItem("user")).id };
        axios.post(USER_API_BASE_URL+"/getformbyid",userid).then(res =>{

            if(res.data !== "No Form Found")
            localStorage.setItem("userform",JSON.stringify(res.data));
            else
            return null;
        })
    }

}
export default new CartServices();