import { useContext } from "react"
import { UserContext } from "../UserContext"

const Home = () => {

  const {user} = useContext(UserContext)

  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <hr />
      <pre >
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}

export default Home
