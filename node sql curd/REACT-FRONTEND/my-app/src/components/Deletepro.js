import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import catApi from '../apiPath/catApi';
import pdtApi from '../apiPath/pdtApi';


export default function Deletepro() {

    let {id} = useParams();
    let navigate = useNavigate()

    useEffect(()=>{
        fetch(pdtApi + 'delete-pdt/' + id, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(ans=>{
            console.log("res from delete product route");
            console.log(ans);
            if(ans){
                navigate('/show-product');
            }
        }) 
    },[]);

  return (
    <></>
  )
}
