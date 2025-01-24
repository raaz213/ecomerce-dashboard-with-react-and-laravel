import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    let Cmp = props.Cmp;
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('uer-info')){
            navigate('/register')
        }
    },[]);
  return (
    <div>
        <Cmp/>
    </div>
  )
}

export default Protected