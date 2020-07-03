import express from 'express';
import {createUser, findUser} from './controllers/users'

const api = express.Router();

//endpoints we need

//user - get one, check username/email, put to update, post to create, delete

api.post("/registration", createUser);
api.post("/auth", findUser)

export default api;