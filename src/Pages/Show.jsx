import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGET } from '../misc/config';


const Show = () => {
    const { id } = useParams();

    const [show, setShow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      
      let isMounted = true;

      apiGET(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if(isMounted){
          setShow(results)
          setIsLoading(false)
        }
      }).catch(err => { 
        if(isMounted){
          setError(err.message);
          setIsLoading(false);
        }        
     });

     return ()=> {
      isMounted = false;
     }

    },[id]);

    console.log(show);

    if(isLoading){
      return <div>Data is being loaded</div>
    }

    if(error){
      return <div> Error Occured: {error} </div>
    }
  return (
    <div>
          read more page
    </div>
  )
}

export default Show
