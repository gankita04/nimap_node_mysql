
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import catApi from '../apiPath/catApi';



export default function Deletecategory() {
    var {id} = useParams();
    var navigate=useNavigate();

    useEffect(()=>{
        fetch(catApi + 'delete-cat/' + id, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log("delete route");
                console.log(result);
                if(result){
                    navigate('/show-category')
                }

            })
    },[])

  return (
    <></>
  )
}
