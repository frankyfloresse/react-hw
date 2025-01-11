import {useEffect, useState} from "react";
import {userService} from "../../services/userService.ts";
import {IUser} from "../../models/IUser.ts";
import User from "../user/User.tsx";


const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { users } = await userService.getUsers();
            setUsers(users);
        }

        fetchData();
    }, []);

    return (
        <div>

            {
                users.map(user => <User key={user.id} user={user} />)
            }
        </div>
    );
};

export default Users;