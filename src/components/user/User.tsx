import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({ user }) => {
    return (
        <div>
            <div>{user.id}. {user.firstName} {user.lastName}</div>
            <div>Username: {user.username}</div>
            <img src={user.image} alt={user.username}/>
        </div>
    );
};

export default User;