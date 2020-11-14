import express from 'express';
import v1Controller from './v1.controller';
import { validateBody, schemas } from '../../../middleware/validator';
import { sanitize } from '../../../middleware/sanitizer';

export const v1Router = express.Router();
v1Router.route('/user').get( v1Controller.userList);
v1Router.route('/message').get( v1Controller.messageList);
v1Router.route('/user/:userId').get( v1Controller.fetchUser);
v1Router.route('/user/:userId/:smsId').post(sanitize(), validateBody(schemas.sendMessage),  v1Controller.sendMessage);

 