import { Router } from "express";
import { getResult, singleSubmission } from "../controller/single.controller";

const singleSubmissionRouter = Router();

singleSubmissionRouter.post("/submit", singleSubmission);
singleSubmissionRouter.get("/getResult", getResult);

export default singleSubmissionRouter;
