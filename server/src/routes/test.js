import express from "express";
import multer from "multer";
var upload = multer();
const router = express.Router();

router.post("/", upload.array(), (req, res) => {
  console.log(req.body.contents);
  return res.json({
    success: true
  });
});

router.get("/", (req, res) => {
  return res.json({
    success: true
  });
});

export default router;
