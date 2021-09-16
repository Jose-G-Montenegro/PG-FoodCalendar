import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserForAdmin } from "../../../actions";
import DeleteUser from "./DeleteUser";
import { Link } from "react-router-dom";


export default function AdminUser () {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const userDetails = useSelector((state) => state.adminUsers);

    useEffect(() => {
        dispatch(setUserForAdmin(token))
    }, [dispatch, token])

    return ( 
        <div>
            <h3>Usuarios:</h3>
                    {userDetails?.map((e) => (
                    <div key={e.id}>
                        <Link to={`/user/${e.id}`}>
                        <br/><h6>Nombre: {e.name}</h6>
                        </Link>
                        <h6>Categoría: {e.category}.<br/>Correo: {e.email}<br/></h6>
                        <DeleteUser id={e.id}/>
                    </div>
                    ))}
        </div>
     );
}