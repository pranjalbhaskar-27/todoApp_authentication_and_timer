import React from 'react'
import List from './List'

export default function ToInput(props) {

    // console.log(props.items)
    var today=new Date();
    var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    
    var x = document.getElementById("myTime");
    // console.log(x.value)
    return (

        <div className='mainCont'>
            <h3>ToDo-Input</h3>
            <div className='inpMaster'>
            <input value={props.items}onChange={props.inpHandler}/>
            <div className='timeInp'><input type="time" id="myTime" defaultValue={time}></input></div>
            <button onClick={props.pushIt}>+</button>
            </div>
            <List addIt={props.addItem} setaddItem={props.setaddItem} />
        </div>
    )

}
