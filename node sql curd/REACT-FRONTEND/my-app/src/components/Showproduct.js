


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import pdtApi from '../apiPath/pdtApi';
import catApi from '../apiPath/catApi';



export default function Showproduct() {

    var [apidata, setApidata] = useState([]);
    var [catData, setCatData] = useState([]);

    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

     // handle next
     const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }

    // handle previous
    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }
    const updatePageData = () => {
        const pagedatacount = Math.ceil(apidata.length / 10);
        setPageCount(pagedatacount);

        const LIMIT = 10;
        const skip = LIMIT * page // 5 *2 = 10
        // const dataskip = catData.slice(page === 1 ? 0 : skip - LIMIT, skip);
        const dataskip = apidata.slice(page === 1 ? 0 : skip - LIMIT, skip);

        setPageData(dataskip)
        
    }

 


    useEffect(() => {
      fetch(pdtApi + 'show-pdt')
            .then(res => res.json())
            .then(result => {
                // console.log("data from Api");
                // console.log(result);
                setApidata(result);
                
            });
            fetch(catApi + 'show-cat')
            .then(res=>res.json())
            .then(val=>{
                console.log(val);
                 setCatData(val);
                // setPro(val['productRec'])
            })
    }, [])

    useEffect(() => {
        updatePageData();
    }, [page,apidata])

    return (
        <div className='container'>
            <h2>Showproduct</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Product Id</th>
                       <th scope="col">Product Name</th>
                         <th scope="col">Category Name</th>
                       <th scope="col">Category Id</th>
                        <th scope="col">Delete</th>
                         <th scope="col">Edit</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        pageData && pageData.map(obj =>
                            <tr>
                             <td>{obj.id}</td>
                             <td>{obj.name}</td>
                            <td>{catData.filter(cat=>{ return cat.id === obj.catid })[0]?.name}</td>

                             {/* <td>{obj.catvalues[0].name}</td> */}
                            <td>{obj.catid}</td>

                                <td>
                                    <button className='del-btn btn btn-sm btn-danger'>
                                        <Link to={"/delete-pro/" + obj.id}>Delete</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className='edit-btn btn btn-sm btn-info'>
                                        <Link to={"/edit-pro/" + obj.id}>Edit</Link>
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <div className='d-flex justify-content-center'>
             <Pagination>

                        <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
                        {
                            Array(pageCount).fill(null).map((ele, index) => {
                                return (
                                    <>
                                        <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                    </>
                                )
                            })
                        }
                        <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
                    </Pagination>
            </div>
          
        </div>
    )
}


