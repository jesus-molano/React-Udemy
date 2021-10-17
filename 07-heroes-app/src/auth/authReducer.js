// import { types } from '../types/types';

// const state = {
//   name: 'Jesus',
//   logged: true,
// }

export const authReducer = (state = {}, action) => {
	const types = {
		'[auth] login': {
			...action.payload,
			logged: true,
		},
		'[auth] logout': {
			logged: false,
		},
  };
  const auth = types[action.type] || null;
  return auth;
};
