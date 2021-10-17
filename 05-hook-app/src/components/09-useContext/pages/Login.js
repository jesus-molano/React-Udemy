import { useContext } from "react"
import { UserContext } from "../UserContext"

const Login = () => {

  const { user, setUser } = useContext(UserContext);
  const newUser = {
    id: 123,
    name: "jesus",
    email: "jesus@email.com"
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <pre >
        {JSON.stringify(user, null, 3)}
      </pre>
      <button className="btn btn-primary" onClick={() => setUser(newUser)} > Change </button>
    </div>
  )
}

export default Login
