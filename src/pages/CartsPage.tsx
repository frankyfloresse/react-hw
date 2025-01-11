import Carts from "../components/carts/Carts.tsx";
import {useParams} from "react-router-dom";


const CartsPage = () => {
    const { userId } = useParams();

    return (
        <div>
            { userId && <Carts userId={userId} /> }

        </div>
    );
};

export default CartsPage;