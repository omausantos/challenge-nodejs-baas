import { Schema, model, Document, Types } from 'mongoose'

interface UserInterface extends Document {
  _id: Types.ObjectId,
  name: string,
  email: string,
  password?: string
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
  },
  password: {
    type: String,
    required: true,
    select: false
  }
},
{ versionKey: false })

export default model<UserInterface>('User', UserSchema)
