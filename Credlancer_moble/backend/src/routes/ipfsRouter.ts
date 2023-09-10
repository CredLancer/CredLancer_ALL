import { Router } from "express";
import { multerUploader, uploadToIPFS } from "../helpers";

const ipfsRouter = Router();

ipfsRouter.post("/", multerUploader.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: "file not found" });
  const ipfsfileResponse = await uploadToIPFS(file.buffer);
  res.json({ ipfsfileResponse });
});

export default ipfsRouter;
