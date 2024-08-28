import React from 'react'

import SignIn from '../../components/SignIn/SignIn.component';

const signin = ({loadUser}) => {
  return (
    <SignIn loadUser={{loadUser}} />
  )
}

export default signin;