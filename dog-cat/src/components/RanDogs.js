import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import "../css/RanDogs.css"

const RanDogs =()=> {
    const [dogs,setDogs] = useState([])
    const {num} = useParams()
   
    useEffect( (int)=>{

        const fetchData = async (int)=>{
        try {
            let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${int}`);
                setDogs(res.data.message)
        } catch (error) {
            setDogs([]);
            console.log(error);
        }}

        fetchData(num)
    },[num])
    
    let randImg = dogs.map((dog,i) => {
        return <img src={dog} key={i} alt={""}/>
    })
    return ( 
        <div className="randDogs" >
            {randImg}
        </div>
        );
    
}
 
export default RanDogs;