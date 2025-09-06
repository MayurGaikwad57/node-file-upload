const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },         // e.g., uuid.png
    originalName: { type: String, required: true },     // e.g., me.png
    mimetype: { type: String, required: true },         // e.g., image/png
    size: { type: Number, required: true },             // in bytes
    path: { type: String, required: true },             // e.g., /uploads/uuid.png
    url: { type: String },                              // optional if you generate a static/public URL
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // who uploaded it
    createdAt: { type: Date, default: Date.now }
})

const File = mongoose.model('File',fileSchema);

module.exports = File;