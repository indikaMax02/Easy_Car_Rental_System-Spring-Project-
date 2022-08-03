import CarService from "../../services/CarService";
import React, {useEffect, useState} from "react";
import CarItem from "../../components/customer/carItem/CarItem";
import "../../pages/customerPages/home";
import ClipLoader from "react-spinners/ClipLoader";

const index=[];

function CarDetails(props){
    const [loading,setLoading]=useState(false)
    const loadData= async () => {
        index.length=0;
        let response = await CarService.getAllCar();
        if (response.status == 200) {
            index.length=0
            for (const car of response.data.data) {
                let resPhoto = await CarService.getCarImage("Car001", "Front");
                index.push({
                    customerId : props.data.customerId,
                    carId : car.vehicleId,
                    imgUrl: URL.createObjectURL(resPhoto.data),
                    carType : car.vehicleType,
                    carName : car.brand,
                    automatic: car.transmissionType,
                    numofp : car.numOfPassenger,
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
                        index.slice(0,30).map((item) => (
                            <CarItem item={item}/>
                            ))
                }
            </>
        )
}
export default (CarDetails)




