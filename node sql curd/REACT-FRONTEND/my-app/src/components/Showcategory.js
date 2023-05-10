
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import catApi from '../apiPath/catApi';



export default function Showcategory() {

    var [apidata, setApidata] = useState([]);

    useEffect(() => {
        fetch(catApi + 'show-cat')
            .then(res => res.json())
            .then(result => {
                // console.log("data from Api");
                // console.log(result);
                setApidata(result);
            })
    }, [])

    return (
        <div className='container'>
            <h2>Showcategory</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        apidata && apidata.map(obj =>
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.name}</td>
                                <td>
                                    <button className='del-btn btn btn-sm btn-danger'>
                                        <Link to={"/delete-cat/" + obj.id}>Delete</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className='edit-btn btn btn-sm btn-info'>
                                        <Link to={"/edit-cat/" + obj.id}>Edit</Link>
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}
