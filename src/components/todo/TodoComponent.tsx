import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

interface IProps {
    item: ITodo;
}

const TodoComponent: FC<IProps> = ({ item }) => {
    return (
        <div>
            <div className={`${(item.completed) ? 'line-through' : ''}`}>{item.id}. {item.todo} -
                <span
                    className={`${item.completed ? 'text-green-500 ml-0' : 'text-red-600 ' } ml-1 font-bold`}
                >{item.completed ? 'done' : 'undone'}
                </span>
            </div>
        </div>
    );
};

export default TodoComponent;