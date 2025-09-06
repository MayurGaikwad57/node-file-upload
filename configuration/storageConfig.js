const fs = require('fs').promises;   // ✅ use promise API
const multer = require('multer');
const path = require('path');

const uploadDir = path.join(__dirname, '../uploads');

// ✅ ensure folder exists before using it
async function ensureUploadDir() {
  try {
    await fs.mkdir(uploadDir, { recursive: true });
    console.log('Uploads folder ready at:', uploadDir);
    return uploadDir;
  } catch (error) {
    console.error('Error creating uploads folder:', error);
    throw error; 
  }
}

// ✅ call immediately at startup
ensureUploadDir();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueFileName + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
module.exports = upload;
