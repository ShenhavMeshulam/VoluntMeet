import {connect} from 'mongoose';

export const configureMongoose = () =>
  connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });