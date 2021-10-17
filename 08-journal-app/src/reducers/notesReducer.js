import { types } from '../assets/types';

const initialState = {
	notes: [],
	active: null,
};

const { notesActive, notesAddEntry, notesLoad, notesUpdate, notesDelete, notesLogoutCleaning } = types;

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case notesActive:
			return {
				...state,
				active: {
					...action.payload,
				},
			};

		case notesAddEntry:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};

		case notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};

		case notesUpdate:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id ? action.payload.note : note
				),
			};
		case notesDelete:
			return {
				...state,
				active: null,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};

		case notesLogoutCleaning:
			return {
				...state,
				active: null,
				notes: [],
			};

		default:
			return state;
	}
};
