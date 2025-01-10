import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/user.service.ts";
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