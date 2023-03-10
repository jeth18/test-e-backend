'use strict';

const router = require('express').Router();
const prefix = '/logs';

const controller = require('../controllers/log.controller');
const middleware = require('../middleware/validate.middleware')

router.get(`${prefix}/`, middleware.validate ,controller.all);
router.post(`${prefix}/`, controller.create);
router.get(`${prefix}/:id`, controller.info);
router.put(`${prefix}/:id`, controller.update);
router.delete(`${prefix}/:id`, controller.delete);

module.exports = router;