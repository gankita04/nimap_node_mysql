
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import catApi from '../apiPath/catApi';

export default function Editcategory() {

    var [name,setName] = useState('');
    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        fetch(catApi + 'show-cat/' +id)
        .then(res=>res.json())
        .then(val=>{ 
            if(val & val.length > 0)
            console.log(val);
            var{id,name} = val[0].name;
            setName(name);
        })
    },[])

    function updateRec(ev){
        ev.preventDefault();
        console.log(name);
        var catName = name;

        fetch(catApi + 'update-cat/'+id , {
            method:"PUT",
            headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify(
                    {
                        name: catName
                    }
                )
        })
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            if(val['msg']){
                navigate('/show-category')
            }
        })
    }

  return (
    <div className='container'>
        <form onSubmit={updateRec}>
        <h2>Edit Category</h2>

        <input type="text" value={name} onChange={(ev)=>{setName(ev.target.value)}} className='form-control'/><br/>
        <button className='btn btn-warning'>Update</button>
        </form>
    </div>
  )
}

