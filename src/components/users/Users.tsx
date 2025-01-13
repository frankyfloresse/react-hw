import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/user.service.ts";
import User from "../user/User.tsx";
import Pagination from "../pagination/Pagination.tsx";

const LIMIT = 9;

const Users = () => {
   const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const { users, total } = await userService.getAllUsers(query.get('page') || '1', LIMIT);
            setMaxPage(Math.ceil(total / LIMIT));
            setUsers(users);
        }

        fetchData();

    }, [query]);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} />)
            }

            <Pagination maxPage={maxPage} />
        </div>
    );
};

export default Users;