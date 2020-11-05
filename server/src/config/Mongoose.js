import {connect} from 'mongoose';

export const configureMongoose = () =>
  connect(process.env.MONGO_URL ?? 'mongodb+srv://root:xz6F9V46jwU4i3s@prod.rj7wa.mongodb.net/VoluntMeetDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });