'use strinct';
const joi = require('joi')

const schema = joi.object().keys({
	type: joi.string().required(),
	priority: joi.string().required(),
	path: joi.string().required(),
	message: joi.string().required(),
})

class LogController {

	all(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	create(req, res, next) {

		const validate = schema.validate(req.body);
		console.log(validate);

		if(validate.error) return res.status(400).send("Error al guardar")
		res.json({ message: req.body });
	}

	info(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	update(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	delete(req, res, next) {
		res.json({ message: 'Example request.' });
	}
}

module.exports = new LogController();
