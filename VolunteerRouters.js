import express from "express";
import { fetchVolunteer, addVolunteer, deleteVolunteer, updateVolunteer } from "../Controllers/VolunteerController.js";
import { verifyToken } from "../Middleware/VerifyToken.js";
const VolunteersRouter = express.Router();

VolunteersRouter.get('/',fetchVolunteer);

VolunteersRouter.post('/', addVolunteer);

VolunteersRouter.delete('/:ID',deleteVolunteer);

VolunteersRouter.put('/:ID',updateVolunteer);



export default VolunteersRouter;