import NothingSelected from "./NothingSelected"
import NotePage from "../notes/NotePage"
import Sidebar from "./Sidebar"
import { useSelector } from "react-redux"

const JournalPage = () => {

  const {active} = useSelector(state => state.notes)

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />
      <main>
        {
          (active)
            ? <NotePage />
            : <NothingSelected />
        }
      </main>
    </div>
  )
}

export default JournalPage
