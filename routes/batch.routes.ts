import { Router } from "express";
import { batchSubmit, getData } from "../controller/batch.controller";

const batchSubmissionRouter = Router();

batchSubmissionRouter.post("/batchSubmit", batchSubmit);
batchSubmissionRouter.get("/getData", getData);

export default batchSubmissionRouter;
