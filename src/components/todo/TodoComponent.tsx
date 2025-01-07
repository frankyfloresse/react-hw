import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

interface IProps {
    item: ITodo;
}

const TodoComponent: FC<IProps> = ({ item }) => {
    return (
        <div className={"m-3 p-3 border-2 rounded-md w-1/2"}>
            <div>{item.id}</div>
            <div className={"italic font-bold"}>{item.title}</div>
            <div>{String(item.completed)}</div>
        </div>
    );
};

export default TodoComponent;