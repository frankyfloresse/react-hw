import {FC} from "react";
import {ICar} from "../../models/ICar.ts";

interface IProps {
    car: ICar;
}

const CarItem: FC<IProps> = ({ car }) => {
    return (
        <div className={'m-3'}>
            <div>{car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
        </div>
    );
};

export default CarItem;