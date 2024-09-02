import React from 'react'

import SignIn from '../../components/SignIn/SignIn.component';

const SigninRoute = ({loadUser}) => {
  return (
    <SignIn loadUser={loadUser} />
  )
}

export default SigninRoute;