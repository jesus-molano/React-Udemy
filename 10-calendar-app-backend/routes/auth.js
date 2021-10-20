import { Router } from 'express';
import { addUser, loginUser, validateToken } from '../controllers/auth.js';
import { check } from 'express-validator';
import { strongPasswordConfig } from './expressValidator.js';
const router = Router();

// Authentication:
// host + /api/auth

router.post(
	'/register',
	[
		// middlewares
		check('name', 'The name is required').not().isEmpty(),
		check('email', 'The email is required').isEmail(),
		check(
			'password',
			'The password must be strong[+8 characters and upper case and lower case]'
		).isStrongPassword(strongPasswordConfig),
	],
	addUser
);
router.post('/',
  [
    check('email', 'The email is required').isEmail(),
    check(
			'password',
			'The password must be strong[+8 characters and upper case and lower case]'
		).isStrongPassword(strongPasswordConfig),  
  ], loginUser);
router.get('/validate', validateToken);

export default router;
