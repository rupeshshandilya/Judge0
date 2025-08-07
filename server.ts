import express, { json, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import batchSubmissionRouter from "./routes/batch.routes";
import singleSubmissionRouter from "./routes/single.routes";
dotenv.config({
  path: "./.env",
});

const app = express();
const PORT = process.env.PORT || 8080;
  app.use(json());

app.use("/api/v1/batch", batchSubmissionRouter);
app.use('/api/v1/single', singleSubmissionRouter);

app.get('/api/v1',(req: Request,res: Response,next: NextFunction) => {
    res.status(200).json({
        message:"got"
    })
})

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
