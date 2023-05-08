import { useState, useEffect } from 'react'
import { StyledTab, StyledTabs, H3, Span, StyledTabPannel } from './Tabs.styled'
import TabPanel from '@mui/lab/TabPanel'
import { NisabInfo } from '../Nisab info/NisabInfo'
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import { getApiData } from '../../../lib/api'
export default function MultipleTabs() {
  const [value, setValue] = useState('0')
  //const [nisabData, setNisabData] =(null)
  const [goldPriceUsd, setGoldPriceUsd] = useState([])
  const [goldPriceGbp, setGoldPriceGbp] = useState([])
  const [silverPriceUsd, setSilverPriceUsd] = useState([])
  const [silverPriceGbp, setSilverPriceGbp] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState()
  const [uk] = useState('£')
  const [us] = useState('$')

async function getNisabData() {
  const data = getApiData()
  console.log(data)
  data
    .then((res) => {
      console.log(res)
      setGoldPriceUsd(`$${(res[3].price_gram_24k * 85).toFixed(2)}`)
      setGoldPriceGbp(`£${(res[0].price_gram_24k * 85).toFixed(2)}`)
      setSilverPriceUsd(`$${(res[2].price_gram_24k * 595).toFixed(2)}`)
      setSilverPriceGbp(`£${(res[1].price_gram_24k * 595).toFixed(2)}`)
      setError(false)
      setIsPending(false)
   
    
      /*
      setGoldPrice(
        setCurrency === 'USD'
          ? `$${(res[3].price_gram_24k * 85).toFixed(2)}`
          : `£${(res[0].price_gram_24k * 85).toFixed(2)}`
      )
      setSilverPrice(
        setCurrency === 'USD'
          ? `$${(res[2].price_gram_24k * 595).toFixed(2)}`
          : `£${(res[1].price_gram_24k * 595).toFixed(2)}`
      )
      
      */
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



  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <StyledTabs value={value} onChange={handleChange} centered>
        <StyledTab label="US" value="0" />
        <StyledTab label="UK" value="1" />
      </StyledTabs>
      <StyledTabPannel value="0">
        <NisabInfo
          setSymbol={us}
          setCurrency={'USD'}
          goldPrice={goldPriceUsd}
          silverPrice={silverPriceUsd}
          error={error}
          isPending={isPending}
        />
      </StyledTabPannel>
      <StyledTabPannel value="1">
        <NisabInfo
          setSymbol={uk}
          setCurrency={'GBP'}
          goldPrice={goldPriceGbp}
          silverPrice={silverPriceGbp}
          isPending={isPending}
        />
      </StyledTabPannel>
    </TabContext>
  )
}
