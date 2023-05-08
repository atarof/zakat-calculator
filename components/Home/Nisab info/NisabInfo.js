import { H3, NisabBanner, Information, Nisab, Ermes, Span} from './NisabInfo.styled'
import React, { useState, useEffect } from 'react'
import { CalculatorForm } from '../Calculator/CalculatorForm'
import { getApiData } from '../../../lib/api'
export function NisabInfo({ setSymbol, setCurrency, goldPrice, silverPrice, error, isPending }) {
  //const [goldPrice, setGoldPrice] = useState([])
  //const [silverPrice, setSilverPrice] = useState([])
  //const [isPending, setIsPending] = useState(true)
  //const [error, setError] = useState()

  useEffect(() => {}, [])
  return (
    <>
      <NisabBanner>
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
      <H3>
        Enter amounts below in <Span>{setCurrency}</Span>
      </H3>
      <CalculatorForm silverNisab={silverPrice} currency={setSymbol} />
    </>
  )
}
