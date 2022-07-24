import axios from "../axios";

class CarService {
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