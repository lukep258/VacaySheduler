import { useState, useEffect } from 'react'
import './App.css'
import Landing from './components/Landing'
import Planner from './components/Planner'

function App() {
  const [dayi,setDayi] = useState(0)
  const [dayf,setDayf] = useState(0)

  // useEffect(()=>{
  //   setDayi(0)
  //   setDayf(0)
  // },[])

  return (
    <>
      <div id='header'>
        <strong id='headerTitle'>VayK</strong>
      </div>
      <div id='body'>
        {
          dayi===0 ?
          <Landing setDayi={setDayi} setDayf={setDayf}/> :
          <Planner dayi={dayi} dayf={dayf} setDayi={setDayi} setDayf={setDayf}/>
        }
      </div>
    </>
  )
}

export default App
