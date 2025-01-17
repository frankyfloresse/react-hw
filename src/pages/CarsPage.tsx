import CarsList from "../components/cars/CarsList.tsx";
import {Link} from "react-router-dom";

const CarsPage = () => {
    return (
        <div>
            <Link to={'/create'}>Create New car</Link>
            <CarsList />
        </div>
    );
};

export default CarsPage;