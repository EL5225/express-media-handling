module.exports = {
  filesUploads: (req, res) => {
    const folderFIle = req.file.destination.split("/")[1];
    const file_url = `${req.protocol}://${req.get("host")}/${folderFIle}/${
      req.file.filename
    }`;

    req.body.file_url = file_url;

    res.json({
      status: true,
      message: "File uploaded successfully",
      data: {
        file_url,
      },
    });
  },

  multiUploads: (req, res) => {
    const files_url = [];

    req.files.map((file) => {
      const folderFIle = file.destination.split("/")[1];
      const file_url = `${req.protocol}://${req.get("host")}/${folderFIle}/${
        file?.filename
      }`;

      files_url.push(file_url);
    });

    res.json({
      status: true,
      message: "Files uploaded successfully",
      data: {
        files_url,
      },
    });
  },
};
