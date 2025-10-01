const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    required: true,
    trim: true
  },
  courseId: {
    type: String,
    required: false,
    default: null
  },
  courseTitle: {
    type: String,
    required: true,
    trim: true
  },
  coursePrice: {
    type: String,
    required: true,
    trim: true
  },
  courseDuration: {
    type: String,
    required: true,
    trim: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed'],
    default: 'pending'
  },
  orderId: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
