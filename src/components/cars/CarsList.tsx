import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getCars} from "../../services/car.service.ts";
import CarItem from "../car-item/CarItem.tsx";

const CarsList = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {

        const fetchData = async () => {
            const data = await getCars();
            setCars(data);
        }

        fetchData();
    }, []);


    return (
        <div>
            {
                cars.map((car, index) => <CarItem key={index} car={car} />)
            }
        </div>
    );
};

export default CarsList;