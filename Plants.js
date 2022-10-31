import React, { Component } from 'react';
import Axios from 'axios';
import {useEffect, useState } from 'react';
import './NP.css';



function Plant(){

    const [data, setData] =useState(null);
    
    const fetchData1 = ()=> {
        Axios.get(`http://mooon.pythonanywhere.com/json/get_pot/100`)
        .then((res) => {
            setData(res.data)
        });
    };


    const fetchData2 = ()=> {
        Axios.get(`http://mooon.pythonanywhere.com/json/get_pot/200`)
        .then((res) => {
            setData(res.data)
        });
    };




    return(
        <div className='div2'>
            <div className='div-inner2'>
            <h1 className ='App-title'>Eco Flower: Plant Information</h1>

            <p className = 'plant-one'>Choose your pot</p>

            <button className='pot_buttons' onClick={fetchData1}> pot1</button>
            <button className='pot_buttons' onClick={fetchData2}> pot2</button>
            

            <p> </p>

            <input style={{fontFamily: "Copperplate"}} placeholder= {data?.PNAME} type='text' />
            <p  style={{textAlign: "center" ,fontFamily: "Copperplate"}} className = 'app-into'>Name of the plant </p>

            <input placeholder= {data?.ILAST} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Time of last irrigation</p>

            <input placeholder= {data?.IDUR} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Duration irrigation</p>

            <input placeholder= {data?.IAMOUT} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Water Spend</p>

            <input placeholder= {data?.MLAST} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Time of last measurment</p>

            <input placeholder= {data?.MVAL} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Moisture</p>

            <input placeholder= {data?.TVAL} type='text' />
            <p style={{fontFamily: "Copperplate"}} className = 'app-into'>Temperature</p>
            </div>
            
        </div>

    );
}

export default Plant;