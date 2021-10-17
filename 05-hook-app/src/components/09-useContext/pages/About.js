import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const About = () => {

  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      <h1>About</h1>
      <hr />
      <pre >
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className="btn btn-warning" onClick={() => setUser({})} > Logout </button>
    </div>
  )
}

export default About
