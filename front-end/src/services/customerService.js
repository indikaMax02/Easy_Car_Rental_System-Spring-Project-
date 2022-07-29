import  axios from "../axios";

class CustomerService {

    addCustomer= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/CustomerRegister',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




}

export default new CustomerService();