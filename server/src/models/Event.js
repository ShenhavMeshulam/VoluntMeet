import {Schema, model as createModel} from 'mongoose';

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: () => new Date()
  }
});

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
})

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: creatorSchema,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: false
  },
  minPeople: {
    type: Number,
    required: true
  },
  maxPeople: {
    type: Number,
    required: true
  },
  comments: {
    type: [commentSchema],
    required: false
  }
});

export const Event = createModel('Event', schema);