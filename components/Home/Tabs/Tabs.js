import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { StyledTab, StyledTabs } from './Tabs.styled'
import { NisabInfo } from '../Nisab info/NisabInfo'

export default function MultipleTabs() {
  const [value, setValue] = useState('1')
  const [uk, setUk] = useState('UK')
  const [us, setUs] = useState('US')
  const [europe, setEu] = useState('Europe')
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

}
