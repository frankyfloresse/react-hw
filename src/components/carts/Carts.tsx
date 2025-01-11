import {FC, useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {cartService} from "../../services/cart.service.ts";

interface IProps {
   userId?: string;
}

const Carts: FC<IProps> = ({ userId }) => {
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        console.log(userId)
        if (userId) {
            const fetchData = async () => {
                const { carts } = await cartService.getCartsByUserId(userId);
                setCarts(carts);
            }
            fetchData();
        }
    }, [userId]);


    return (
        <div>
            {JSON.stringify(carts)}
        </div>
    );
};

export default Carts;