import React from 'react'
import './List.css'
import CountDown from '../Timer/CountDown'

export default function List(props) {
  console.log('List',props.addIt)
    const deleteItem=(key)=>{
        console.log('u pressed me')
        const freshList=props.addIt.filter((el)=>{
            console.log(el.id,"khjgukhjlkascjnkm")
          return el.id!==key  
        })
        
        props.setaddItem(freshList)

    }
    return (
    <div>
        {props.addIt.map((e,i)=>{
            return(
                <div key={i} className='itemList'>
                    <p>{e.key}</p>
                <p >{e.el}</p>
                <p>{e.timer}</p>
                <button onClick={()=>deleteItem(e.id)}>x</button>
                <CountDown end={(parseInt(e.timer.split(':').map(Number).join(''))-parseInt(e.key.split(':').map(Number).join('')))} />
                {/* <div style={{color: "red"}}>{parseInt(e.key.split(':').map(Number).join(''))}</div> */}
            </div>
            )
        })}
    </div>
  )
}
