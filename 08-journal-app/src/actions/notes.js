import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	updateDoc,
} from '@firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { types } from '../assets/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';
import { uploadAlert, savedAlert } from '../helpers/alerts';
import Swal from 'sweetalert2';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};
		const docRef = await addDoc(
			collection(db, `${uid}/journal/notes`),
			newNote
		);

		dispatch(activeNote(docRef.id, newNote));
		dispatch(addNewNote(docRef.id, newNote));
	};
};

export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});
export const addNewNote = (id, note) => ({
	type: types.notesAddEntry,
	payload: {
		id,
		...note,
	},
});

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes,
});

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { id, url = null, ...noteWithinId } = note;
		const noteRef = doc(db, `${uid}/journal/notes/${id}`);
		await updateDoc(noteRef, { url, ...noteWithinId });

		dispatch(refreshNote(id, note));
		savedAlert();
	};
};

export const refreshNote = (id, note) => ({
	type: types.notesUpdate,
	payload: {
		id,
		note,
	},
});

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;
		uploadAlert();
		const fileUrl = await fileUpload(file);
		activeNote.url = fileUrl;
		dispatch(startSaveNote(activeNote));
		Swal.close();
	};
};

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const noteRef = doc(db, `${uid}/journal/notes/${id}`);
		await deleteDoc(noteRef);

		dispatch(deleteNote(id));
	};
};

export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id
});

export const noteLogout = () => ({
	type: types.notesLogoutCleaning
});
