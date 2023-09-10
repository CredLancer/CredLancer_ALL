import express from "express";
import { PORT } from "./config";
import cors from "cors";
import web3EventListeners from "./web3EventListeners";
import ipfsRouter from "./routes/ipfsRouter";
import organizationRouter from "./routes/organizationRouter";
import questRouter from "./routes/questRouter";
import lancerRouter from "./routes/lancerRouter";
import proposalRouter from "./routes/proposalRouter";
import workRouter from "./routes/workRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/ipfs", ipfsRouter);
app.use("/organization", organizationRouter);
app.use("/quest", questRouter);
app.use("/lancer", lancerRouter);
app.use("/proposal", proposalRouter);
app.use("/work", workRouter);

web3EventListeners();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
