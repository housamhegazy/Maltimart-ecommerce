import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [days,setDays] = useState(0);
  const [Hours,setHours] = useState(0);
  const [Minutes,setMinutes] = useState(0);
  const [Secondes,setSecondes] = useState(0);

  let interval;
  const countDown = ()=>{
    const destination = new Date('oct 10 ,2023').getTime()
    interval = setInterval(()=>{
      const now = new Date().getTime();
      const diffirence = destination - now
      const days = Math.floor(diffirence / (1000 * 60 * 60 * 24))
      const Hours = Math.floor(diffirence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const Minutes = Math.floor(diffirence % (1000 * 60 * 60 )/ (1000 * 60))
      const Secondes = Math.floor(diffirence % (1000 * 60) /(1000))
      if(destination < 0){
        clearInterval(interval)
      }else{
        setDays(days)
        setHours(Hours)
        setMinutes(Minutes)
        setSecondes(Secondes)
      }
    })
  }
  useEffect(()=>{
    countDown()
  },[])
  return (
    <div className='clock__wrapper d-flex align-items-center gap-3'>
      <div className="clock d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{days}</h1>
          <h5 className='text-white fs-6'>days</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{Hours}</h1>
          <h5 className='text-white fs-6'>Hours</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{Minutes}</h1>
          <h5 className='text-white fs-6'>Minutes</h5>
        </div>
        <span className='text-white fs-3'>:</span>
      </div>
      <div className="clock d-flex align-items-center gap-3">
        <div className='text-center'>
          <h1 className='text-white fs-3 mb-2'>{Secondes}</h1>
          <h5 className='text-white fs-6'>Secondes</h5>
        </div>
      </div>
    </div>
  )
}
