// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #24263c;
`

export const PasswordCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #383a4e;
  width: 550px;
  height: 320px;
  padding: 20px;
  border-radius: 14px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 45px;
  font-family: 'Roboto';
  margin: 0px;
`
export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 14px;
  font-family: 'Roboto';
`

export const InputElement = styled.input`
  padding: 10px;
  border: none;
  margin-top: 30px;
  width: 350px;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 13px;
  font-family: 'Roboto';
`
