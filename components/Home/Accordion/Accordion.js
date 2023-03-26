import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accord, Expand } from './Accordion.styled'
import { Div, Information } from './Accordinadiv.styled'
export function AccordianInfo() {
    
return (
  <Div>
    <Information>How to calculate zakat</Information>
    <Accord>
      <AccordionSummary sx={{ '.MuiAccordionSummary-content': { justifyContent: 'center' } }} expandIcon={<Expand />}>
        Nisab calculation
      </AccordionSummary>
      <AccordionDetails>
        Nisab: the threshold amount by which Zakāh becomes compulsory <br /> <br /> The Nisab for gold and silver is 85
        grams and 595 grams respectively. To determine the Nisab for monetary savings, the price of gold per gram for
        the current day is taken and multiplied by 85. The same is done for silver but multiplied by 595.
      </AccordionDetails>
    </Accord>
    <Accord>
      <AccordionSummary
        sx={{ '.MuiAccordionSummary-content': { justifyContent: 'center' } }}
        expandIcon={<Expand />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        Zakat calculation
      </AccordionSummary>
      <AccordionDetails>
        Zakat should be paid if an individual's monetary savings reaches at least the silver nisab and a whole lunar
        (hijri) year has passed. 2.5% from the total amount equal to and above the nisab should be paid in zakat.
        <br /> <br />
        Example for gold:
        <br /> <br /> If the price of gold per gram in the UK is £10. The Nisab for gold would be £10 x 85( grams of
        gold). If a person's savings reaches this amount and more (£850+), whilst a whole lunar year has passed, they
        must pay 2.5% from this. In this case the zakat to pay would be £21.25 <br /> <br />
        Example for silver: <br /> <br /> If the price of silver per gram in the UK is £1. The Nisab for silver would be
        £5 x 595( grams of silver). If a person's savings reaches this amount and more (£595+), whilst a whole lunar
        year has passed, they must pay 2.5% from this. In this case the zakat to pay would be £14.87 <br /> <br />
        This calculator focuses on monetary savings, for zakat concerning livestock, properties etc scholarly advice
        should be sought.
      </AccordionDetails>
    </Accord>
  </Div>
)
}