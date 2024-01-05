const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true,
  },
  sharedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Share = mongoose.model('Share', shareSchema);
module.exports = Share;
