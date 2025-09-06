const File = require('../model/fileUploadSchema')

async function fileUpload(req,res) {
    console.log(req)
    try {
        const filesUploaded = req.files;
         if (!filesUploaded || filesUploaded.length === 0) {
      return res.status(400).json({ message: "No files provided" });
    }
//  if(!filesUploaded) return res.status(400).json({message:"No file provided"});
//  const file = new File({
//     filename : filesUploaded.filename ,       
//     originalName : filesUploaded.originalname,
//     mimetype:    filesUploaded.mimetype,
//     size: filesUploaded.size,
//     path: filesUploaded.path
//  })

const saveUploadedFiles = await Promise.all((
   filesUploaded.map((file)=>{
      const files = new File({
          filename : file.filename ,       
    originalName : file.originalname,
    mimetype:    file.mimetype,
    size: file.size,
    path: file.path
      })
      return files.save();
    })
))

//   await file.save();
  res.status(201).json(
    {message:"File stored successfully",
    files : saveUploadedFiles
}
);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:error})
    }
}

module.exports = {fileUpload};

