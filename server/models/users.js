import mongoose from 'mongoose'

const model = {
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  password: String
}

export default mongoose.model('Users', model)