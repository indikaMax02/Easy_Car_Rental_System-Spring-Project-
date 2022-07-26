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

    updateCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('car/updateCar',data)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    updateCarImage =async (imgFile,carId,view) =>{
        const promise = new Promise((resolve, reject) => {
            axios.post('car/updateCarImage?carId='+carId+'&view='+view,imgFile)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCar =async (carId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('car/deleteCar?carId='+carId)

                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
    deleteCarImages =async (carId) =>{
        const promise = new Promise((resolve, reject) => {
            axios.delete('car/deleteCarImage?carId='+carId)

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