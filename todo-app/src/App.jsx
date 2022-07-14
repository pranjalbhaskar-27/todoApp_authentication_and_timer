import React,{ useState } from 'react'
import { Route,Router} from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import ToInput from './components/Todo/ToInput'
import List from './components/Todo/List'
import CountDown from './components/Timer/CountDown'

var c=0; 

function App() {

  const [item, setItem] = useState('')
  const [addItem, setaddItem]=useState([])

  const inputHandler=(e)=>{
    setItem(e.target.value)
  }
  
  const pushItem=()=>{

    var today = new Date();
    var a=today.toLocaleString('en-US', { hour: 'numeric', hour12: false,minute:"numeric",second:"numeric" })
    var time=a.substring(0,a.length-3)
    var x=document.getElementById("myTime").value;

    setaddItem([...addItem,{el:item,key:time,timer:x,id:c}])
    c++
    setItem('')
    
    console.log(x.value) 

  }

  return (
    <div className="App">
            <Header />
            <ToInput items={item} inpHandler={inputHandler} pushIt={pushItem} addItem={addItem} setaddItem={setaddItem}/>
            <CountDown end={20}/>

    </div>
  )
}

export default App
