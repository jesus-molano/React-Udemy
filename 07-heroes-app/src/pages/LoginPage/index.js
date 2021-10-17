import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

const LoginPage = ({history}) => {
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem('lastPath') || '/'

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Vekpol',
      }
    })
    history.replace(lastPath);
  }
  return (
    <div className="container mt-5">
      <h2>Login!</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
