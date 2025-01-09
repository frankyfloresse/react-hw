import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

interface IProps {
    item: ITodo;
}

const Todo: FC<IProps> = ({ item }) => {
    const completeStyle = item.completed ? 'border-green-500' : 'border-red-500';

    return (
        <div className={`${completeStyle} m-3 p-3 border-2 rounded-md w-1/2`}>
            <div className="italic font-bold">{item.id}. {item.title}</div>
        </div>
    );
};

export default Todo;