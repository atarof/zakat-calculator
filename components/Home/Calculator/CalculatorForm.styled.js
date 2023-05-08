import styled from 'styled-components'
import InfoOutlined from '@mui/icons-material/InfoOutlined'
import Button from '@mui/material/Button'
import { Field } from 'formik'

export const Form = styled.form`
  width: 30%;
  background-color: inherit;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
`
export const Div = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  justify-content: center;
  text-align: center;
  background-color: inherit;
  align-items: center;
`

export const Input = styled(Field)`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
`
export const Information = styled.h4`
  color: #f9ebc8;
  text-decoration: underline;
`
export const NisabBanner = styled.div`
  text-align: center;
`
export const Due = styled.p`
  color: #fcd9b8;
  font-size: 30px;
  font-weight: 900;
`
export const InfoOut = styled(InfoOutlined)`
  background-color: #112b3c;
  color: whitesmoke;
`
export const SubmitButton = styled(Button)`
  && {
    font-size: 12px;
    color: #16213e;
    font-weight: bold;
    margin-top: 20px;
    background: #fcd9b8;

    &:hover {
      background-color: #b7d3df;
    }
  }
`
export const ResetButton = styled(Button)`
  && {
    font-size: 12px;
    font-weight: bold;
    color: #16213e;
    margin-top: 20px;
    background: #fcd9b8;
    &:hover {
      background-color: #b7d3df;
    }
  }
`

export const Error = styled.div`
  color: red;
`