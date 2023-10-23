const multer = require("multer");
const path = require("path");

const generator = (props) => {
  const { destination, mimetypes } = props;
  return multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, destination);
      },
      filename: (req, file, cb) => {
        const filename = Date.now() + path.extname(file.originalname);
        cb(null, filename);
      },
    }),
    fileFilter: (req, file, cb) => {
      const allowedFileTypes = mimetypes;
      if (!allowedFileTypes.includes(file.mimetype)) {
        const err = new Error(
          `Invalid file type. Only ${allowedFileTypes} are allowed.`
        );

        return cb(err, false);
      }
      cb(null, true);
    },
  });
};

module.exports = {
  imageUpload: generator({
    destination: "public/images",
    mimetypes: ["image/jpeg", "image/png", "image/gif"],
  }),

  videoUpload: generator({
    destination: "public/videos",
    mimetypes: ["video/mp4", "video/mpeg", "video/x-msvideo"],
  }),

  pdfUpload: generator({
    destination: "public/pdf",
    mimetypes: ["application/pdf"],
  }),
};

// const upload = multer({ storage });
