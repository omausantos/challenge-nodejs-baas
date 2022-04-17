import { Schema, model, Document, Types } from 'mongoose'

interface UserInterface extends Document {
  _id: Types.ObjectId,
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Date
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
