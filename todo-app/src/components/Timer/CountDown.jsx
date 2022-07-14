import React from 'react'
import { useState,useEffect } from 'react'

export default function CountDown(props) {

    
    const [inc,setInc]=useState(props.end)
    useEffect(()=>{
        console.log('anecomk',inc)
        if(inc>0){
            setTimeout(()=>{
                setInc((inc-1),1000)
            })
        }
    },[])

    console.log(props.end)
    
    return (

        <div>
           {inc} 
        </div>
    )

}
