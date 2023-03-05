import Users from './model.js';
import { Ok, InternalServerError } from '../../helpers/server-response.js';

const result = (total) => (total ? 'successfully' : 'not');

export const createUser = async (req, res) => {
  try {
    const users = await new Users().create(req.body);

    const message = 'User successfully created';
    return Ok(res, message, users);
  } catch (err) {
    console.error(err.message);
    return InternalServerError(res, err.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await new Users().findOne({ id });

    const message = `Users ${result(users)} found`;
    return Ok(res, message, users);
  } catch (err) {
    console.error(err.message);
    return InternalServerError(res, err.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await new Users().find(req.query);

    const message = `Users ${result(users.length)} found`;
    return Ok(res, message, users);
  } catch (err) {
    console.error(err.message);
    return InternalServerError(res, err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await new Users(id).update(req.body);

    const message = `Users${result(user)} updated`;
    return Ok(res, message, user);
  } catch (err) {
    console.error(err.message);
    return InternalServerError(res, err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await new Users(id).update({ is_deleted: true });

    return Ok(res, `User ${result(user)} deleted`, user);
  } catch (err) {
    console.error(err.message);
    return InternalServerError(res, err.message);
  }
};
