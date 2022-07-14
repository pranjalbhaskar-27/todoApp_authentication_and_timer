import React from 'react'
import CountDown from './CountDown';

export default function SetTimeOut() {

    const myTimeout = setTimeout(CountDown, 5000);
    // function myGreeting() {
    // document.getElementById("demo").innerHTML = "Happy Birthday!"}

  return (
    <div>
        <CountDown />
    </div>
  )
}
