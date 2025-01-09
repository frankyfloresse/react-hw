import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

interface IProps {
    item: ITodo;
}

const TodoComponent: FC<IProps> = ({ item }) => {
    const lineStyle = item.completed ? 'line-through' : '';
    const completeStyle = item.completed ? 'text-green-500 ' : 'text-red-600';
    const completeText = item.completed ? 'done' : 'undone';

    return (
        <div>
            <div className={lineStyle}>
                {item.id}. {item.todo} -
                <span className={`${completeStyle} font-bold`}> {completeText}</span>
            </div>
        </div>
    );
};

export default TodoComponent;