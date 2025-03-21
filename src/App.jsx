import { use, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const intervaloRef = useRef(null);

  let newSeconds = seconds + 1;
  let newMinutes = minutes;
  let newHours = hours;
  let intervalo

  const start = () => {
    if (intervaloRef.current) return;

    intervaloRef.current = setInterval(() => {
      newSeconds = newSeconds +1
      if (newSeconds === 60){
        newSeconds = 0
        newMinutes = newMinutes + 1
      }

      if(newMinutes === 60){
        newMinutes = 0
        newHours = newHours + 1
      }
      setSeconds(newSeconds)
      setMinutes(newMinutes)
      setHours(newHours)
    }, 10);
  }

  const pause = () => {

    clearInterval(intervaloRef.current);

    intervaloRef.current = null; // Limpa a referência do intervalo
  }

  const stop = () => {

    clearInterval(intervaloRef.current);

    intervaloRef.current = null; // Limpa a referência do intervalo

    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  return (
    <div className='bg-[#1a4136] flex flex-col justify-center items-center h-[100vh]'>
      <div className='text-7xl flex flex-row text-[#3ecf8e]'>
      <p>{hours.toString().padStart(2, '0')}:</p>
        <p>{minutes.toString().padStart(2, '0')}:</p>
        <p>{seconds.toString().padStart(2, '0')}</p>
      </div>
      <div className='flex flex-row gap-5 text-[#3ecf8e] text-2xl'>
        <button onClick={start} className='cursor-pointer'>Play</button>
        <button onClick={pause} className='cursor-pointer'>Pause</button>
        <button onClick={stop} className='cursor-pointer'>Stop</button>
      </div>
    </div>
  )
}

export default App
