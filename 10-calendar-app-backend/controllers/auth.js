import { User } from '../models/User.js';
import bcrypt from 'bcryptjs'

export const addUser = async (req, res) => {
	const { email, password } = req.body
	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({
				ok: false,
				msg: 'Ya hay un usuario con este correo'
			})
		}
		user = new User(req.body);
		//Encrypt password
		const salt = bcrypt.genSaltSync();
		user.password = bcrypt.hashSync(password, salt);
		await user.save();

		res.status(201).json({
			ok: true,
			uid: user.id,
			name: user.name,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'An error occurred in the registry'
		})
	}
};

export const loginUser = (req, res) => {
	const { email, password } = req.body;
	return res.json({
		ok: true,
		msg: 'login',
		email,
		password,
	});
};

export const validateToken = (req, res) => {
	res.json({
		ok: true,
		msg: 'validate token',
	});
};
