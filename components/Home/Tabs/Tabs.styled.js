import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from '@mui/lab/TabPanel'

export const StyledTabs = styled(Tabs)`
  && .MuiTabs-indicator {
    background-color: #fcd9b8;;
    max-width: 40;
    width: 100%;
  }
  && .indicator {
    background-color: #1f6ff7;
  }
`
export const StyledTabPannel = styled(TabPanel)`
text-align: center

`
export const StyledTab = styled(Tab)`
  && {
    color: white;
    text-transform: none;

  }
`
