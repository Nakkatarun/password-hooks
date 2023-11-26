// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordCardContainer,
  Heading,
  Paragraph,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onPasswordChange = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordCardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          type="password"
          value={password}
          onChange={onPasswordChange}
        />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordCardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
