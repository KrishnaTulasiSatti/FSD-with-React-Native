import express from 'express';

import {getStudentsDetails,addStudents} from '../controllers/studentsController.js';

const router = express.Router();

router.get('/get-students',getStudentsDetails);
router.post('/post-students',addStudents);

export default router;