import express from "express";
import cors from "cors";
import studentRouter from "./routes/student-routes";
import courseRouter from "./routes/course-router";
import enrollmentRouter from "./routes/enrollment-router";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.use("/api/v1", studentRouter);
server.use("/api/v1", courseRouter);
server.use("/api/v1", enrollmentRouter);

server.listen(port, () => {
  console.log(`App running on ${port}`);
});
