import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGET } from '../misc/config';


const Show = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);


    useEffect(()=>{
      apiGET(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => setShow(results))
    },[id]);

    console.log(show);

  return (
    <div>
          read more page
    </div>
  )
}

export default Show
