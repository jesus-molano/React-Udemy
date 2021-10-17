import { collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const loadNotes = async (uid) => {
  const noteSnap = await getDocs(collection(db, `${uid}/journal/notes`))
  return noteSnap.docs?.map(snap => ({
    id: snap.id,
    ...snap.data(),
  })) || [];
}