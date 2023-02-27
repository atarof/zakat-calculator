import React, { useState, useEffect } from 'react'
import { fetchHijriDate } from '../../../lib/api'
import { H3 } from './Date.styled'
export function Date() { 
    const [date, setDate] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()
    
   
    async function getDate() {
       const data =  fetchHijriDate()
      data.then((res) => {
        const hijriday = ++ res.data.hijri.day 
            setDate(hijriday + ' ' + ' ' + res.data.hijri.month.en + ' ' + res.data.hijri.year)
            setError(false)
            setIsPending(false)
        })
            .catch((error) => {
            console.log(error.message)
            setError('Sorry unable to fetch date')
            setIsPending(false)
        })
   }
   
   
  useEffect(() => {
   getDate()
  }, [])
    return (
      <>
        <H3>
         Date: <span></span>
          {isPending && <span>Loading</span>}
          {date}
          {error && error}
        </H3>
      </>
    )


}