import React, {useEffect, useState} from "react";
import axios from "axios";
import CarService from "../services/CarService";
import carService from "../services/CarService";

export default function TestApp() {

    const App=() => {
        const [item, setItem] = useState(null);
        const [loading, setLoading] = useState(false);

        const getCar = async () => {

            let res1 = await carService.getCarImage("Car001", "Front");
            if (res1.status === 200) {
                setItem(URL.createObjectURL(res1.data));

            }
        };


        useEffect(() => {
            getCar()
        }, [])

        return (
            <div className={"App"}>{item}</div>
        )
    }
}