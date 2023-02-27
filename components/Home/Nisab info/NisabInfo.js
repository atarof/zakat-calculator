import { H3, NisabBanner, Information, Nisab, Ermes } from './NisabInfo.styled'
import React, { useState, useEffect } from 'react'
import { AccordianInfo } from './Accordion/Accordion'
import { CalculatorForm } from '../Calculator/CalculatorForm'
import { getApiData } from '../../../lib/api'
import { Date } from '../Date/Date'
export function NisabInfo() {
  const [goldPrice, setGoldPrice] = useState([])
  const [silverPrice, setSilverPrice] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState()
  
  async function getNisabData() { 
    const data = getApiData()
      data.then((res) => {
        console.log(res)
        setGoldPrice(`£${(res[0].price_gram_24k * 85).toFixed(2)}`)
        setSilverPrice(`£${(res[1].price_gram_24k * 595).toFixed(2)}`)
        setError(false)
        setIsPending(false)
      })
      .catch((error) => {
        console.log(error.message)
        setError('Sorry unable to fetch nisab')
        setIsPending(false)
      })
  }

  useEffect(() => {
    getNisabData()
  }, [])
  return (
    <>
      <NisabBanner>
        <Information>How to calculate zakat</Information>
        <AccordianInfo></AccordianInfo>
        <Date />
        <H3>
          Today's gold nisab:
          {isPending && <Nisab> Loading..</Nisab>}
          {goldPrice && <Nisab> {goldPrice} </Nisab>}
          {error && <Ermes> {error} </Ermes>}
        </H3>
        <H3>
          Today's silver nisab:
          {isPending && <Nisab> Loading..</Nisab>}
          {goldPrice && <Nisab> {silverPrice} </Nisab>}
          {error && <Ermes> {error} </Ermes>}
        </H3>
      </NisabBanner>
      <CalculatorForm silverNisab={silverPrice} />
    </>
  )
}
