import React from 'react'

import SignUp from '../../components/SignUp/SignUp.component';

const register = ({loadUser}) => {
  return (
    <SignUp loadUser={loadUser} />
  )
}

export default register;