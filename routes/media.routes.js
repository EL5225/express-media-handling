const router = require("express").Router();
const { imageUpload, videoUpload, pdfUpload } = require("../libs/multer");
const {
  filesUploads,
  multiUploads,
} = require("../controllers/media.controller");

router.post("/storage/images", imageUpload.single("image"), filesUploads);
router.post("/storage/videos", videoUpload.single("video"), filesUploads);
router.post("/storage/documents", pdfUpload.single("document"), filesUploads);

router.post("/storage/multi/images", imageUpload.array("image"), multiUploads);

module.exports = router;
