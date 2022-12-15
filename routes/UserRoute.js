import express from 'express';
import { getUsers, getUsersById, saveUser } from '../controllers/userController.js';
const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)
router.post('/users', saveUser)


export default router;