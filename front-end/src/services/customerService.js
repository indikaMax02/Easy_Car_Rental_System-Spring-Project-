import  axios from "../axios";

class CustomerService {
    checkCustomerUserAccount=async (userName,password) =>{
        const promise = new Promise((resolve, reject) => {
            var qs = require('qs');
            var data = qs.stringify({
                'userName': userName,
                'password': password,
            });
            var config = {
                method: 'post',
                url: 'customer/checkAccount',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : data
            };
            axios(config)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    genarateNewCustomerId= async () =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('customer/genarateCustId')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    ifExistEmail= async (email) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('customer/ifExistEmail?email='+email)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    ifExistCustomerUserAccount= async (userName) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('customer/ifExistUserAccount?userName='+userName)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    registerCustomer= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/guestUser/register',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    uploadImageCustomerNIC= async (dataFile, custID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadImageNic?custId='+custID,dataFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    uploadImageCustomerDrivingLicence= async (dataFile, custID) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer/uploadLicenceImage?custId='+custID,dataFile)

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