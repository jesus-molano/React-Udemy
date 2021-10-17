import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { startSaveNote, startUploading } from "../../actions/notes";
import { useMoment } from "../../hooks/useMoment";
import Icon from "../Icon";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector(state => state.notes)
  const { monthDayYear } = useMoment(active.date)
  
  const handleSave = () => {
    dispatch(startSaveNote(active))
  }
  const handleUploadPicture = () => {
    document.querySelector("#fileSelector").click()
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  }
  return (
    <div className="notes__appbar">
      <span>{monthDayYear}</span>
      <input id='fileSelector' type="file" name="file" style={{ display: 'none' }} onChange={handleFileChange}/>
      <div className='notes_appbar-buttons'>
        <button className="btn btn-image" onClick={handleUploadPicture}><Icon iconToChoose='image' width='35' height='35' /> </button>
        <button className="btn btn-save" onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default NotesAppBar
