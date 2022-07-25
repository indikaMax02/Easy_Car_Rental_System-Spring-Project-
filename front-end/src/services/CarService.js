import axios from "../axios";

class CarService {

    getAllCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('car/getAllCars')

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    addCarImage = async (data,carId) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('car/addCarImage?carId='+carId,data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    getCarImage = async (carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('car/getCarImage?carId='+carId+'&view='+view, {
                responseType: 'blob',
            })

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }


    addCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('car/addCar',data)

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
export default new CarService();