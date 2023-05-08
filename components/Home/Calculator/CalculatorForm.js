import React, { useState, useRef } from 'react'
import { Form, Div, Input, Due, SubmitButton, Error,  ResetButton, Span } from '../Calculator/CalculatorForm.styled'
import { useFormik, Formik } from 'formik'
import * as yup from 'yup'

export const CalculatorForm = ({ silverNisab, currency }) => {
  const [dueAmount, calculateAmount] = useState('')
  //convert silver price into floating number to remove "£" sign
  const silverNis = parseFloat(silverNisab.toString().substring(1))
  const dueFocus = useRef()
  //scroll amount into view:
  const handleScroll = () => {
    dueFocus.current.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth', alignToTop: false })
  }

  const validationSchema = yup.object().shape({
    goldSilver: yup.number().required('Please enter a amount'),
    cash: yup.number().required('Please enter a amount'),
    buisnessAssets: yup.number().required('Please enter a amount'),
    liabilities: yup.number().required('Please enter a amount')
  })

  const formik = useFormik({
    initialValues: {
      goldSilver: 0,
      cash: 0,
      buisnessAssets: 0,
      liabilities: 0
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const total = values.buisnessAssets + values.cash + values.goldSilver - values.liabilities
      const totalamount = (values.buisnessAssets + values.cash + values.goldSilver - values.liabilities) * 0.025
      const totalDue = totalamount.toFixed(2)

      //check to see if the total amount is greater then the minimum nisab
      if (total >= silverNis) {
        calculateAmount(`Zakat due: ${currency}${totalDue}`)
      } else {
        calculateAmount('Your total has not reached the minimum nisab')
      }
      handleScroll(dueFocus.current)
    },
    onReset: () => {
      calculateAmount(false)
    }
  })
  return (
    <Div>
      <Formik>
        <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <label htmlFor="goldSilver">Gold and Silver</label>
          <Input
            name="goldSilver"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.goldSilver}
          />
          {formik.touched.goldSilver && formik.errors.goldSilver ? <Error>{formik.errors.goldSilver}</Error> : null}

          <label htmlFor="Cash">Cash</label>
          <Input name="cash" type="number" placeholder="£" onChange={formik.handleChange} value={formik.values.cash} />
          {formik.touched.cash && formik.errors.cash ? <Error>{formik.errors.cash}</Error> : null}
          <label htmlFor="buisnessAssets">Business assets</label>
          <Input
            name="buisnessAssets"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.buisnessAssets}
          />
          {formik.touched.buisnessAssets && formik.errors.buisnessAssets ? (
            <Error>{formik.errors.buisnessAssets}</Error>
          ) : null}
          <label htmlFor="liabilities">Short term liabilities</label>
          <Input
            name="liabilities"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.liabilities}
          />
          {formik.touched.liabilities && formik.errors.liabilities ? <Error>{formik.errors.liabilities}</Error> : null}
          <SubmitButton type="submit">Submit</SubmitButton>
          <ResetButton type="reset">Reset</ResetButton>
        </Form>
      </Formik>
      <Due ref={dueFocus}>{dueAmount}</Due>
    </Div>
  )
}
