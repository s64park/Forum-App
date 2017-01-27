/**
 * Created by Terry on 2017-01-27.
 */
import mongoose from 'mongoose';

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log(`Connected to mongodb server ${process.env.MONGODB_URI}`); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect(process.env.MONGODB_URI);

export default mongoose;