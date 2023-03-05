import express from 'express';
import { validate } from 'express-validation';
import { createUser, getUser, getUsers, updateUser, deleteUser } from './controller.js';
import { create, findOne, findAll, update, deleted } from './validation.js';

const router = express.Router();

router.route('/').post(validate(create), createUser).get(validate(findAll), getUsers);

router.route('/:id').get(validate(findOne), getUser).patch(validate(update), updateUser).delete(validate(deleted), deleteUser);

export default router;