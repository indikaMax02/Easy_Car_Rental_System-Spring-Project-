import CarService from "../../services/CarService";
import React, {useEffect, useState} from "react";
import CarItem from "../../components/customer/carItem/CarItem";
import "../../pages/customerPages/home";
import ClipLoader from "react-spinners/ClipLoader";

const carData=[];

function CarDetails(){
    const [loading,setLoading]=useState(false)
    const loadData= async () => {
        let response = await CarService.getAllCar();
        if (response.status === 200) {
            for (const car of response.data.data) {
                let resPhoto = await CarService.getCarImage("Car001", "Front");
                carData.push({
                    imgUrl: URL.createObjectURL(resPhoto.data),
                    carType : car.vehicleType,
                    carName : car.brand,
                    automatic: car.transmissionType,
                    state: car.state,
                    price: car.dailyPrice,
                })
            }
            setLoading(false)
        }
    }
    useEffect(() =>{
        loadData()
        setLoading(true)
    },[])
        return(
            <>
                {
                    loading ?
                        <ClipLoader color={'blue'} loading={loading}  size={150} />
                        :
                        carData.slice().map((item) => (
                            <CarItem item={item}/>
                            ))
                }
            </>
        )
}
export default (CarDetails)




