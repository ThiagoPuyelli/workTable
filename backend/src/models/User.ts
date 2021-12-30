import { Schema, Document, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'
import { NextFunction } from 'express'
import bcrypt from 'bcryptjs'

const userSchema = new Schema<UserInterface & Document>({
  name: {
    type: String,
    required: true,
    maxLength: 40
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 40
  },
  email: {
    type: String,
    required: true,
    maxLength: 64
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxLength: 40
  },
  projects: {
    type: [Schema.Types.ObjectId],
    ref: 'Project'
  },
  modeProjects: {
    type: [Schema.Types.ObjectId],
    ref: 'Project'
  },
  workProjects: {
    type: [Schema.Types.ObjectId],
    ref: 'Project'
  }
}, {
  versionKey: false
})

userSchema.pre('save', async function (next: NextFunction) {
  if (!this.isModified('password')) return next()

  try {
    const passwordHased = await bcrypt.hash(this.password, 10)
    this.password = passwordHased
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePasswords = async function (password: string) {
  try {
    const comparePassword = await bcrypt.compare(password, this.password)
    return comparePassword
  } catch (err) {
    return false
  }
}

export default model<UserInterface & Document>('User', userSchema)
